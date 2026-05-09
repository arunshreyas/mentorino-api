import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class SessionsService {
  constructor(private prisma: PrismaService) {}

  async create(data: any) {
    return this.prisma.session.create({
      data,
      include: {
        mentor: { select: { id: true, name: true, email: true } },
        student: { select: { id: true, name: true, email: true } },
      },
    });
  }

  async findAll() {
    return this.prisma.session.findMany({
      include: {
        mentor: { select: { id: true, name: true, email: true } },
        student: { select: { id: true, name: true, email: true } },
      },
      orderBy: { startTime: 'desc' },
    });
  }

  async findOne(id: number) {
    return this.prisma.session.findUnique({
      where: { id },
      include: {
        mentor: { select: { id: true, name: true, email: true } },
        student: { select: { id: true, name: true, email: true } },
      },
    });
  }

  async update(id: number, data: any) {
    return this.prisma.session.update({
      where: { id },
      data,
      include: {
        mentor: { select: { id: true, name: true, email: true } },
        student: { select: { id: true, name: true, email: true } },
      },
    });
  }

  async remove(id: number) {
    return this.prisma.session.delete({
      where: { id },
    });
  }

  async findByMentor(mentorId: string) {
    return this.prisma.session.findMany({
      where: { mentorId },
      include: {
        mentor: { select: { id: true, name: true, email: true } },
        student: { select: { id: true, name: true, email: true } },
      },
      orderBy: { startTime: 'desc' },
    });
  }

  async findByStudent(studentId: string) {
    return this.prisma.session.findMany({
      where: { studentId },
      include: {
        mentor: { select: { id: true, name: true, email: true } },
        student: { select: { id: true, name: true, email: true } },
      },
      orderBy: { startTime: 'desc' },
    });
  }
}
