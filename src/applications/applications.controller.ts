import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards, Request } from '@nestjs/common';
import { ApplicationsService } from './applications.service';
import { CreateApplicationDto } from './dto/create-application.dto';
import { UpdateApplicationDto } from './dto/update-application.dto';
import { Roles } from '../auth/decorators/roles.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { OwnerGuard } from '../common/guards/owner.guard';
import { Role } from '../generated/prisma/client';

@Controller('applications')
export class ApplicationsController {
  constructor(private readonly applicationsService: ApplicationsService) {}

  @Post()
  create(@Body() createApplicationDto: CreateApplicationDto) {
    return this.applicationsService.create(createApplicationDto, null);
  }

  @Get()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  findAll() {
    return this.applicationsService.findAll();
  }

  @Get('my-applications')
  @UseGuards(JwtAuthGuard)
  findMyApplications(@Request() req) {
    return this.applicationsService.findByUser(req.user.email);
  }

  @Get('mentor-dashboard')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.MENTOR, Role.ADMIN)
  mentorDashboard() {
    return this.applicationsService.findMentorDashboard();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  async findOne(@Param('id') id: string, @Request() req) {
    return this.applicationsService.findOne(id, req.user);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard, RolesGuard, OwnerGuard)
  @Roles(Role.MENTOR, Role.ADMIN)
  update(@Param('id') id: string, @Body() updateApplicationDto: UpdateApplicationDto) {
    return this.applicationsService.update(id, updateApplicationDto);
  }

  @Patch(':id/accept')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  accept(@Param('id') id: string) {
    return this.applicationsService.accept(id);
  }

  @Patch(':id/reject')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  reject(@Param('id') id: string) {
    return this.applicationsService.reject(id);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard, OwnerGuard)
  @Roles(Role.ADMIN)
  remove(@Param('id') id: string) {
    return this.applicationsService.remove(id);
  }
}
