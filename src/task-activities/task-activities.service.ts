import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskActivityDto } from './dto/create-task-activity.dto';
import { UpdateTaskActivityDto } from './dto/update-task-activity.dto';
import { PrismaService } from '../prisma.service';

@Injectable()
export class TaskActivitiesService {
  constructor(private readonly prisma: PrismaService) {}

  create(createTaskActivityDto: CreateTaskActivityDto) {
    return this.prisma.task_activities.create({
      data: createTaskActivityDto,
    });
  }

  findAll() {
    return this.prisma.task_activities.findMany();
  }

  findOne(id: string) {
    return this.prisma.task_activities.findUniqueOrThrow({
      where: { id },
    }).catch(() => {
      throw new NotFoundException(`Task activity ${id} was not found`);
    });
  }

  update(id: string, updateTaskActivityDto: UpdateTaskActivityDto) {
    return this.prisma.task_activities.update({
      where: { id },
      data: updateTaskActivityDto,
    }).catch(() => {
      throw new NotFoundException(`Task activity ${id} was not found`);
    });
  }

  remove(id: string) {
    return this.prisma.task_activities.delete({
      where: { id },
    }).catch(() => {
      throw new NotFoundException(`Task activity ${id} was not found`);
    });
  }
}
