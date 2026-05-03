import { Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class EventsService {
  private readonly prisma: PrismaService;

  constructor(prisma: PrismaService) {
    this.prisma = prisma;
  }

  create(createEventDto: CreateEventDto) {
    return this.prisma.events.create({
      data: createEventDto,
    });
  }

  findAll() {
    return this.prisma.events.findMany();
  }

  findOne(id: string) {
      return this.prisma.events.findUnique({
      where: { id },
    });
  }

  update(id: string, updateEventDto: UpdateEventDto) {
      return this.prisma.events.update({
      where: { id },
      data: updateEventDto,
    });
  }

  remove(id: string) {
    return this.prisma.events.delete({
      where: { id },
    });
  }
}
