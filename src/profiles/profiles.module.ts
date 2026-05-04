import { Module } from '@nestjs/common';
import { ProfilesService } from './profiles.service';
import { ProfilesController } from './profiles.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [ProfilesController,PrismaService],
  providers: [ProfilesService],
})
export class ProfilesModule {}
