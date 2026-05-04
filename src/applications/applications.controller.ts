import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards, Request } from '@nestjs/common';
import { ApplicationsService } from './applications.service';
import { CreateApplicationDto } from './dto/create-application.dto';
import { UpdateApplicationDto } from './dto/update-application.dto';
import { Roles } from '../auth/roles.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { OwnerGuard } from '../common/guards/owner.guard';

@Controller('applications')
@UseGuards(JwtAuthGuard)
export class ApplicationsController {
  constructor(private readonly applicationsService: ApplicationsService) {}

  @Post()
  create(@Body() createApplicationDto: CreateApplicationDto, @Request() req) {
    return this.applicationsService.create(createApplicationDto, req.user);
  }

  @Get()
  @UseGuards(RolesGuard)
  @Roles('MENTOR' as any, 'ADMIN' as any)
  findAll() {
    return this.applicationsService.findAll();
  }

  @Get('my-applications')
  findMyApplications(@Request() req) {
    return this.applicationsService.findByUser(req.user.email);
  }

  @Get('mentor-dashboard')
  @UseGuards(RolesGuard)
  @Roles('MENTOR' as any, 'ADMIN' as any)
  mentorDashboard() {
    return this.applicationsService.findMentorDashboard();
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Request() req) {
    return this.applicationsService.findOne(id, req.user);
  }

  @Patch(':id')
  @UseGuards(RolesGuard, OwnerGuard)
  @Roles('MENTOR' as any, 'ADMIN' as any)
  update(@Param('id') id: string, @Body() updateApplicationDto: UpdateApplicationDto) {
    return this.applicationsService.update(id, updateApplicationDto);
  }

  @Patch(':id/accept')
  @UseGuards(RolesGuard)
  @Roles('MENTOR' as any, 'ADMIN' as any)
  accept(@Param('id') id: string) {
    return this.applicationsService.accept(id);
  }

  @Patch(':id/reject')
  @UseGuards(RolesGuard)
  @Roles('MENTOR' as any, 'ADMIN' as any)
  reject(@Param('id') id: string) {
    return this.applicationsService.reject(id);
  }

  @Delete(':id')
  @UseGuards(RolesGuard, OwnerGuard)
  @Roles('MENTOR' as any, 'ADMIN' as any)
  remove(@Param('id') id: string) {
    return this.applicationsService.remove(id);
  }
}
