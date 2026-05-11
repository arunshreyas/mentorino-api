import { Test, TestingModule } from '@nestjs/testing';
import { TaskActivitiesController } from './task-activities.controller';
import { TaskActivitiesService } from './task-activities.service';
import { PrismaService } from '../prisma.service';

describe('TaskActivitiesController', () => {
  let controller: TaskActivitiesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TaskActivitiesController],
      providers: [TaskActivitiesService, { provide: PrismaService, useValue: {} }],
    }).compile();

    controller = module.get<TaskActivitiesController>(TaskActivitiesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
