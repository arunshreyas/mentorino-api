import { Injectable } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { PrismaService } from 'src/prisma.service';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ProfilesService {
  private readonly prisma: PrismaService;

  constructor(prisma: PrismaService) {
    this.prisma = prisma;
  }

  create(createProfileDto: CreateProfileDto) {
    return this.prisma.profiles.create({
      data: {
        id: uuidv4(),
        email: createProfileDto.email,
        name: createProfileDto.name,
        role: createProfileDto.role,
        tasks: createProfileDto.tasks,
        created_at: createProfileDto.created_at,
      },
      include: {
        bookings: true,
      },
    });
  }

  findAll() {
    return this.prisma.profiles.findMany();
  }

  findOne(id: string) {
      return this.prisma.profiles.findUnique({
      where: { id },
    });
  }

  update(id: string, updateProfileDto: UpdateProfileDto) {
      return this.prisma.profiles.update({
      where: { id },
      data: updateProfileDto,
    });
  }

  remove(id: string) {
    return this.prisma.profiles.delete({
      where: { id },
    });
  }
}
