import { Module } from '@nestjs/common';
import { ApplicationsService } from './applications.service';
import { ApplicationsController } from './applications.controller';
import { AdminApplicationsController } from './admin-applications.controller';
import { PrismaService } from '../prisma.service';
import { RolesGuard } from '../auth/roles.guard';

@Module({
  controllers: [ApplicationsController, AdminApplicationsController],
  providers: [ApplicationsService, PrismaService, RolesGuard],
})
export class ApplicationsModule {}
