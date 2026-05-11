import { Controller, Get, Patch, Param, UseGuards } from '@nestjs/common';
import { ApplicationsService } from './applications.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { Role } from '../generated/prisma/client';

@Controller('admin/applications')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles(Role.ADMIN)
export class AdminApplicationsController {
  constructor(private readonly applicationsService: ApplicationsService) {}

  @Get()
  findAllPending() {
    return this.applicationsService.findByStatus('pending');
  }

  @Get('status/:status')
  findByStatus(@Param('status') status: string) {
    return this.applicationsService.findByStatus(status);
  }

  @Get('all')
  findAll() {
    return this.applicationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.applicationsService.findOne(id, { role: Role.ADMIN });
  }

  @Patch(':id/approve')
  approve(@Param('id') id: string) {
    return this.applicationsService.updateStatus(id, 'approved');
  }

  @Patch(':id/reject')
  reject(@Param('id') id: string) {
    return this.applicationsService.updateStatus(id, 'rejected');
  }
}
