import { ConflictException, ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { PrismaService } from '../prisma.service';
import { Role } from '../generated/prisma/client';
import * as bcrypt from 'bcrypt';
import { randomUUID } from 'crypto';

@Injectable()
export class ProfilesService {
  private readonly prisma: PrismaService;

  constructor(prisma: PrismaService) {
    this.prisma = prisma;
  }

  async create(createProfileDto: CreateProfileDto) {
    const existing = await this.prisma.profiles.findUnique({
      where: { email: createProfileDto.email.toLowerCase().trim() },
      select: { id: true },
    });
    if (existing) {
      throw new ConflictException('A profile already exists for this email');
    }

    return this.prisma.profiles.create({
      data: {
        id: randomUUID(),
        email: createProfileDto.email.toLowerCase().trim(),
        name: createProfileDto.name.trim(),
        password: await bcrypt.hash(createProfileDto.password, 12),
        role: this.normalizeRole(createProfileDto.role),
        tasks: createProfileDto.tasks ?? [],
      },
      select: this.safeProfileSelect,
    });
  }

  findAll() {
    return this.prisma.profiles.findMany({
      select: this.safeProfileSelect,
      orderBy: { created_at: 'desc' },
    });
  }

  findOne(id: string) {
      return this.prisma.profiles.findUnique({
      where: { id },
      select: this.safeProfileSelect,
    });
  }

  async update(actor: any, id: string, updateProfileDto: UpdateProfileDto) {
    if (actor.role !== Role.ADMIN && actor.sub !== id) {
      throw new ForbiddenException('Access denied');
    }

    const profile = await this.prisma.profiles.findUnique({
      where: { id },
      select: { id: true },
    });
    if (!profile) {
      throw new NotFoundException('Profile not found');
    }

    return this.prisma.profiles.update({
      where: { id },
      data: {
        ...updateProfileDto,
        email: updateProfileDto.email?.toLowerCase().trim(),
        name: updateProfileDto.name?.trim(),
      },
      select: this.safeProfileSelect,
    });
  }

  remove(id: string) {
    return this.prisma.profiles.delete({
      where: { id },
      select: this.safeProfileSelect,
    });
  }

  private normalizeRole(role: string): Role {
    const normalized = role.toUpperCase();
    if (normalized === Role.MENTOR) return Role.MENTOR;
    if (normalized === Role.ADMIN) return Role.ADMIN;
    return Role.USER;
  }

  private readonly safeProfileSelect = {
    id: true,
    email: true,
    name: true,
    role: true,
    tasks: true,
    expertise: true,
    bio: true,
    profile_image_url: true,
    pricing_cents: true,
    timezone: true,
    created_at: true,
  };
}
