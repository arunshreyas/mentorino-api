import {
  BadRequestException,
  ConflictException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { AvailabilityStatus, Prisma, Role, SessionStatus } from '../generated/prisma/client';
import { CreateAvailabilityDto } from './dto/create-availability.dto';
import { BookSessionDto } from './dto/book-session.dto';
import { RescheduleSessionDto } from './dto/reschedule-session.dto';

@Injectable()
export class SessionsService {
  constructor(private prisma: PrismaService) {}

  async createAvailability(user: any, dto: CreateAvailabilityDto) {
    const mentorId = user.role === Role.ADMIN && dto.mentorId ? dto.mentorId : user.sub;

    if (user.role !== Role.ADMIN && mentorId !== user.sub) {
      throw new ForbiddenException('Mentors can only manage their own availability');
    }

    const startTime = this.parseFutureDate(dto.startTime, 'startTime');
    const endTime = this.parseDate(dto.endTime, 'endTime');
    if (endTime <= startTime) {
      throw new BadRequestException('Availability end time must be after start time');
    }

    const mentor = await this.prisma.profiles.findUnique({
      where: { id: mentorId },
      select: { id: true, role: true },
    });
    if (!mentor || mentor.role !== Role.MENTOR) {
      throw new BadRequestException('Availability can only be created for mentor profiles');
    }

    try {
      return await this.prisma.mentorAvailability.create({
        data: {
          mentorId,
          startTime,
          endTime,
          status: AvailabilityStatus.AVAILABLE,
        },
      });
    } catch (error) {
      if (this.isUniqueConstraintError(error)) {
        throw new ConflictException('A slot already exists for this mentor and start time');
      }
      throw error;
    }
  }

  async findAvailability(mentorId: string, includeBooked = false) {
    return this.prisma.mentorAvailability.findMany({
      where: {
        mentorId,
        startTime: { gte: new Date() },
        ...(includeBooked ? {} : { status: AvailabilityStatus.AVAILABLE }),
      },
      orderBy: { startTime: 'asc' },
      include: {
        session: {
          select: {
            id: true,
            status: true,
          },
        },
      },
    });
  }

  async cancelAvailability(user: any, slotId: string) {
    const slot = await this.prisma.mentorAvailability.findUnique({
      where: { id: slotId },
      include: { session: true },
    });
    if (!slot) {
      throw new NotFoundException('Availability slot not found');
    }
    this.assertMentorOrAdmin(user, slot.mentorId);
    if (slot.session?.status === SessionStatus.SCHEDULED) {
      throw new ConflictException('Cancel the scheduled session before removing this slot');
    }

    return this.prisma.mentorAvailability.update({
      where: { id: slotId },
      data: { status: AvailabilityStatus.CANCELLED },
    });
  }

  async book(user: any, dto: BookSessionDto) {
    return this.prisma.$transaction(async (tx) => {
      const slot = await tx.mentorAvailability.findUnique({
        where: { id: dto.availabilitySlotId },
        include: {
          mentor: { select: { id: true, name: true, email: true, role: true } },
        },
      });

      if (!slot) {
        throw new NotFoundException('Availability slot not found');
      }
      if (slot.mentorId === user.sub) {
        throw new BadRequestException('Mentors cannot book their own availability');
      }
      if (slot.startTime <= new Date()) {
        throw new BadRequestException('Cannot book a past time slot');
      }
      if (slot.status !== AvailabilityStatus.AVAILABLE) {
        throw new ConflictException('This slot is no longer available');
      }

      await this.assertNoStudentOverlap(tx, user.sub, slot.startTime, slot.endTime);

      const claimed = await tx.mentorAvailability.updateMany({
        where: {
          id: slot.id,
          status: AvailabilityStatus.AVAILABLE,
          startTime: { gt: new Date() },
        },
        data: { status: AvailabilityStatus.BOOKED },
      });

      if (claimed.count !== 1) {
        throw new ConflictException('This slot was just booked. Please choose another time.');
      }

      return tx.session.create({
        data: {
          title: dto.title?.trim() || `Mentor session with ${slot.mentor.name}`,
          description: dto.description?.trim(),
          notes: dto.notes?.trim(),
          startTime: slot.startTime,
          endTime: slot.endTime,
          mentorId: slot.mentorId,
          studentId: user.sub,
          availabilitySlotId: slot.id,
          status: SessionStatus.SCHEDULED,
        },
        include: this.sessionInclude,
      });
    });
  }

  async findAll() {
    return this.prisma.session.findMany({
      include: this.sessionInclude,
      orderBy: { startTime: 'desc' },
    });
  }

  async findOne(id: number) {
    return this.prisma.session.findUnique({
      where: { id },
      include: this.sessionInclude,
    });
  }

  async findOneForUser(user: any, id: number) {
    const session = await this.findOne(id);
    if (!session) {
      throw new NotFoundException('Session not found');
    }
    this.assertSessionParticipantOrAdmin(user, session);
    return session;
  }

  async update(id: number, data: any) {
    return this.prisma.session.update({
      where: { id },
      data,
      include: this.sessionInclude,
    });
  }

  async cancel(user: any, id: number) {
    const session = await this.prisma.session.findUnique({ where: { id } });
    if (!session) {
      throw new NotFoundException('Session not found');
    }
    this.assertSessionParticipantOrAdmin(user, session);
    if (session.status !== SessionStatus.SCHEDULED) {
      throw new BadRequestException('Only scheduled sessions can be cancelled');
    }

    return this.prisma.$transaction(async (tx) => {
      const cancelled = await tx.session.update({
        where: { id },
        data: { status: SessionStatus.CANCELLED },
        include: this.sessionInclude,
      });

      if (session.availabilitySlotId && session.startTime > new Date()) {
        await tx.mentorAvailability.update({
          where: { id: session.availabilitySlotId },
          data: { status: AvailabilityStatus.AVAILABLE },
        });
      }

      return cancelled;
    });
  }

  async reschedule(user: any, id: number, dto: RescheduleSessionDto) {
    return this.prisma.$transaction(async (tx) => {
      const session = await tx.session.findUnique({ where: { id } });
      if (!session) {
        throw new NotFoundException('Session not found');
      }
      this.assertSessionParticipantOrAdmin(user, session);
      if (session.status !== SessionStatus.SCHEDULED) {
        throw new BadRequestException('Only scheduled sessions can be rescheduled');
      }

      const newSlot = await tx.mentorAvailability.findUnique({
        where: { id: dto.availabilitySlotId },
      });
      if (!newSlot) {
        throw new NotFoundException('New availability slot not found');
      }
      if (newSlot.mentorId !== session.mentorId) {
        throw new BadRequestException('Sessions can only be rescheduled with the same mentor');
      }
      if (newSlot.startTime <= new Date()) {
        throw new BadRequestException('Cannot reschedule to a past time slot');
      }
      if (newSlot.status !== AvailabilityStatus.AVAILABLE) {
        throw new ConflictException('The selected slot is no longer available');
      }

      await this.assertNoStudentOverlap(tx, session.studentId, newSlot.startTime, newSlot.endTime, id);

      const claimed = await tx.mentorAvailability.updateMany({
        where: {
          id: newSlot.id,
          status: AvailabilityStatus.AVAILABLE,
          startTime: { gt: new Date() },
        },
        data: { status: AvailabilityStatus.BOOKED },
      });
      if (claimed.count !== 1) {
        throw new ConflictException('This slot was just booked. Please choose another time.');
      }

      if (session.availabilitySlotId) {
        await tx.mentorAvailability.update({
          where: { id: session.availabilitySlotId },
          data: { status: AvailabilityStatus.AVAILABLE },
        });
      }

      return tx.session.update({
        where: { id },
        data: {
          startTime: newSlot.startTime,
          endTime: newSlot.endTime,
          availabilitySlotId: newSlot.id,
        },
        include: this.sessionInclude,
      });
    });
  }

  async findByMentor(mentorId: string) {
    return this.prisma.session.findMany({
      where: { mentorId },
      include: this.sessionInclude,
      orderBy: { startTime: 'desc' },
    });
  }

  async findByStudent(studentId: string) {
    return this.prisma.session.findMany({
      where: { studentId },
      include: this.sessionInclude,
      orderBy: { startTime: 'desc' },
    });
  }

  async findMySessions(userId: string) {
    return this.prisma.session.findMany({
      where: {
        OR: [
          { mentorId: userId },
          { studentId: userId },
        ],
      },
      include: this.sessionInclude,
      orderBy: { startTime: 'desc' },
    });
  }

  private readonly sessionInclude = {
    mentor: { select: { id: true, name: true, email: true, expertise: true, profile_image_url: true, pricing_cents: true } },
    student: { select: { id: true, name: true, email: true } },
    availabilitySlot: { select: { id: true, status: true } },
  };

  private parseDate(value: string, field: string) {
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) {
      throw new BadRequestException(`${field} must be a valid ISO date`);
    }
    return date;
  }

  private parseFutureDate(value: string, field: string) {
    const date = this.parseDate(value, field);
    if (date <= new Date()) {
      throw new BadRequestException(`${field} must be in the future`);
    }
    return date;
  }

  private assertMentorOrAdmin(user: any, mentorId: string) {
    if (user.role !== Role.ADMIN && !(user.role === Role.MENTOR && user.sub === mentorId)) {
      throw new ForbiddenException('Access denied');
    }
  }

  private assertSessionParticipantOrAdmin(user: any, session: { mentorId: string; studentId: string }) {
    if (user.role === Role.ADMIN) return;
    if (session.mentorId !== user.sub && session.studentId !== user.sub) {
      throw new ForbiddenException('Access denied');
    }
  }

  private async assertNoStudentOverlap(
    tx: Prisma.TransactionClient,
    studentId: string,
    startTime: Date,
    endTime: Date,
    ignoreSessionId?: number,
  ) {
    const overlapping = await tx.session.findFirst({
      where: {
        studentId,
        status: SessionStatus.SCHEDULED,
        ...(ignoreSessionId ? { id: { not: ignoreSessionId } } : {}),
        startTime: { lt: endTime },
        endTime: { gt: startTime },
      },
    });

    if (overlapping) {
      throw new ConflictException('You already have a session that overlaps this time');
    }
  }

  private isUniqueConstraintError(error: unknown) {
    return error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002';
  }
}
