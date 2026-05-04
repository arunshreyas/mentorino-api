import { Module } from '@nestjs/common';
import { TaskActivitiesService } from './task-activities.service';
import { TaskActivitiesController } from './task-activities.controller';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [TaskActivitiesController],
  providers: [TaskActivitiesService, PrismaService],
})
export class TaskActivitiesModule {}
