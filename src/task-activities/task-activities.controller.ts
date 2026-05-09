import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { TaskActivitiesService } from './task-activities.service';
import { CreateTaskActivityDto } from './dto/create-task-activity.dto';
import { UpdateTaskActivityDto } from './dto/update-task-activity.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { Role } from '../generated/prisma/client';

@Controller('task-activities')
export class TaskActivitiesController {
  constructor(private readonly taskActivitiesService: TaskActivitiesService) {}

  @Post()
  create(@Body() createTaskActivityDto: CreateTaskActivityDto) {
    return this.taskActivitiesService.create(createTaskActivityDto);
  }

  @Get()
  findAll() {
    return this.taskActivitiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.taskActivitiesService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  update(
    @Param('id') id: string,
    @Body() updateTaskActivityDto: UpdateTaskActivityDto,
  ) {
    return this.taskActivitiesService.update(id, updateTaskActivityDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  remove(@Param('id') id: string) {
    return this.taskActivitiesService.remove(id);
  }
}
