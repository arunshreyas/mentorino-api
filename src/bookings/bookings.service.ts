import { Injectable } from '@nestjs/common';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class BookingsService {
  private readonly prisma: PrismaService;

  constructor(prisma: PrismaService) {
    this.prisma = prisma;
  }

  create(createBookingDto: CreateBookingDto) {
    return this.prisma.bookings.create({
      data: createBookingDto,
    });
  }

  findAll() {
    return this.prisma.bookings.findMany();
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
