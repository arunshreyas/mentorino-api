import { BadRequestException, ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateApplicationDto } from './dto/create-application.dto';
import { UpdateApplicationDto } from './dto/update-application.dto';
import { PrismaService } from '../prisma.service';

@Injectable()
export class ApplicationsService {
  constructor(private prisma: PrismaService) {}

  create(createApplicationDto: CreateApplicationDto, user: any = null) {
    const applicationData = {
      user_name: user?.name || createApplicationDto.user_name || 'Anonymous User',
      user_email: createApplicationDto.user_email,
      user_phone: createApplicationDto.user_phone,
      mentor_type: createApplicationDto.mentor_type,
      meeting_preference: createApplicationDto.meeting_preference,
      frequency: createApplicationDto.frequency,
      goals: createApplicationDto.goals,
      seriousness: createApplicationDto.seriousness,
      attribution: createApplicationDto.attribution,
      source: createApplicationDto.source,
      tags: createApplicationDto.tags,
      notes: createApplicationDto.notes,
      status: 'pending',
      created_at: new Date(),
    };

    return this.prisma.applications.create({
      data: applicationData,
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
      throw new NotFoundException('Application not found');
    }

    // Check authorization
    if (user.role !== 'ADMIN' && user.role !== 'MENTOR') {
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
    return this.updateStatus(id, 'approved');
  }

  reject(id: string) {
    return this.update(id, { status: 'rejected' });
  }

  remove(id: string) {
    return this.prisma.applications.delete({
      where: { id },
    });
  }

  findByStatus(status: string) {
    this.assertValidStatus(status);

    return this.prisma.applications.findMany({
      where: { status },
      orderBy: { created_at: 'desc' },
    });
  }

  updateStatus(id: string, status: string) {
    this.assertValidStatus(status);

    return this.prisma.applications.update({
      where: { id },
      data: { status },
    });
  }

  private assertValidStatus(status: string) {
    if (!['pending', 'approved', 'rejected'].includes(status)) {
      throw new BadRequestException('Application status must be pending, approved, or rejected');
    }
  }
}
