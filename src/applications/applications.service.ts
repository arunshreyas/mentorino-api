import { Injectable, ForbiddenException } from '@nestjs/common';
import { CreateApplicationDto } from './dto/create-application.dto';
import { UpdateApplicationDto } from './dto/update-application.dto';
import { PrismaService } from '../prisma.service';

@Injectable()
export class ApplicationsService {
  constructor(private prisma: PrismaService) {}

  create(createApplicationDto: CreateApplicationDto, user: any) {
    return this.prisma.applications.create({
      data: {
        ...createApplicationDto,
        user_email: user.email,
      },
    });
  }

  findAll() {
    return this.prisma.applications.findMany({
      orderBy: { created_at: 'desc' },
    });
  }

  findByUser(email: string) {
    return this.prisma.applications.findMany({
      where: { user_email: email },
      orderBy: { created_at: 'desc' },
    });
  }

  findMentorDashboard() {
    return this.prisma.applications.findMany({
      orderBy: { created_at: 'desc' },
    });
  }

  async findOne(id: string, user: any) {
    const application = await this.prisma.applications.findUnique({
      where: { id },
    });

    if (!application) {
      throw new ForbiddenException('Application not found');
    }

    // Check authorization
    if (user.role !== 'admin' && user.role !== 'mentor') {
      // Users can only see their own applications
      if (application.user_email !== user.email) {
        throw new ForbiddenException('Access denied');
      }
    }

    return application;
  }

  update(id: string, updateApplicationDto: UpdateApplicationDto) {
    return this.prisma.applications.update({
      data: updateApplicationDto,
      where: { id },
    });
  }

  accept(id: string) {
    return this.update(id, { status: 'accepted' });
  }

  reject(id: string) {
    return this.update(id, { status: 'rejected' });
  }

  remove(id: string) {
    return this.prisma.applications.delete({
      where: { id },
    });
  }
}
