import { Module } from '@nestjs/common';
import { TaskActivitiesService } from './task-activities.service';
import { TaskActivitiesController } from './task-activities.controller';

@Module({
  controllers: [TaskActivitiesController],
  providers: [TaskActivitiesService],
})
export class TaskActivitiesModule {}
