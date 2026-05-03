import { Injectable } from '@nestjs/common';
import { CreateApplicationDto } from './dto/create-application.dto';
import { UpdateApplicationDto } from './dto/update-application.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ApplicationsService {
  private readonly prisma: PrismaService;

  constructor(prisma: PrismaService) {
    this.prisma = prisma;
  }

  create(createApplicationDto: CreateApplicationDto) {
    return this.prisma.applications.create({
      data: createApplicationDto,
    });
  }

  findAll() {
    return this.prisma.applications.findMany();
  }

  findOne(id: string) {
    return this.prisma.applications.findUnique({
      where: { id },
    });
  }

  update(id: string, updateApplicationDto: UpdateApplicationDto) {
    return this.prisma.applications.update({
      data: updateApplicationDto,
      where: { id },
    });
  }

  remove(id: string) {
    return this.prisma.applications.delete({
      where: { id },
    });
  }
}
