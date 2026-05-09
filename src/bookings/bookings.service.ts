import { Injectable, ConflictException } from '@nestjs/common';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { PrismaService } from '../prisma.service';

@Injectable()
export class BookingsService {
  private readonly prisma: PrismaService;

  constructor(prisma: PrismaService) {
    this.prisma = prisma;
  }

  async create(createBookingDto: CreateBookingDto) {
    // Check for double booking - prevent if same user already has a booking at the same time
    const existingBooking = await this.prisma.bookings.findFirst({
      where: {
        user_id: createBookingDto.user_id,
        date: createBookingDto.date,
        time: createBookingDto.time,
        status: { not: 'cancelled' },
      },
    });

    if (existingBooking) {
      throw new ConflictException('You already have a booking at this time. Please select a different time slot.');
    }

    // Check if slot is already taken by another user
    const slotTaken = await this.prisma.bookings.findFirst({
      where: {
        date: createBookingDto.date,
        time: createBookingDto.time,
        status: { not: 'cancelled' },
      },
    });

    if (slotTaken) {
      throw new ConflictException('This time slot is already booked. Please select a different time.');
    }

    return this.prisma.bookings.create({
      data: createBookingDto,
    });
  }

  findAll() {
    return this.prisma.bookings.findMany();
  }

  findByUserId(userId: string) {
    return this.prisma.bookings.findMany({
      where: { user_id: userId },
    });
  }

  findOne(id: string) {
    return this.prisma.bookings.findUnique({
      where: { id },
    });
  }

  update(id: string, updateBookingDto: UpdateBookingDto) {
      return this.prisma.bookings.update({
      where: { id },
      data: updateBookingDto,
    });
  }

  remove(id: string) {
    return this.prisma.bookings.delete({
      where: { id },
    });
  }
}
