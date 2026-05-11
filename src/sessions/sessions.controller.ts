import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
  Query,
  ForbiddenException,
} from '@nestjs/common';
import { SessionsService } from './sessions.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { Role } from '../generated/prisma/client';
import { CreateAvailabilityDto } from './dto/create-availability.dto';
import { BookSessionDto } from './dto/book-session.dto';
import { RescheduleSessionDto } from './dto/reschedule-session.dto';

@Controller('sessions')
@UseGuards(JwtAuthGuard)
export class SessionsController {
  constructor(private readonly sessionsService: SessionsService) {}

  @Post('availability')
  @UseGuards(RolesGuard)
  @Roles(Role.MENTOR, Role.ADMIN)
  createAvailability(@Body() dto: CreateAvailabilityDto, @Request() req) {
    return this.sessionsService.createAvailability(req.user, dto);
  }

  @Get('availability/:mentorId')
  findAvailability(
    @Param('mentorId') mentorId: string,
    @Query('includeBooked') includeBooked?: string,
  ) {
    return this.sessionsService.findAvailability(mentorId, includeBooked === 'true');
  }

  @Delete('availability/:slotId')
  @UseGuards(RolesGuard)
  @Roles(Role.MENTOR, Role.ADMIN)
  cancelAvailability(@Param('slotId') slotId: string, @Request() req) {
    return this.sessionsService.cancelAvailability(req.user, slotId);
  }

  @Post('book')
  book(@Body() dto: BookSessionDto, @Request() req) {
    return this.sessionsService.book(req.user, dto);
  }

  @Get()
  findAll(@Request() req) {
    if (req.user.role === Role.ADMIN) {
      return this.sessionsService.findAll();
    }
    return this.sessionsService.findMySessions(req.user.sub);
  }

  @Get('my-sessions')
  findMySessions(@Request() req) {
    return this.sessionsService.findMySessions(req.user.sub);
  }

  @Get('mentor/:mentorId')
  @UseGuards(RolesGuard)
  @Roles(Role.MENTOR, Role.ADMIN)
  findByMentor(@Param('mentorId') mentorId: string, @Request() req) {
    if (req.user.role !== Role.ADMIN && req.user.sub !== mentorId) {
      throw new ForbiddenException('Access denied');
    }
    return this.sessionsService.findByMentor(mentorId);
  }

  @Get('student/:studentId')
  @UseGuards(RolesGuard)
  @Roles(Role.ADMIN)
  findByStudent(@Param('studentId') studentId: string) {
    return this.sessionsService.findByStudent(studentId);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Request() req) {
    return this.sessionsService.findOneForUser(req.user, parseInt(id));
  }

  @Patch(':id/cancel')
  cancel(@Param('id') id: string, @Request() req) {
    return this.sessionsService.cancel(req.user, parseInt(id));
  }

  @Patch(':id/reschedule')
  reschedule(
    @Param('id') id: string,
    @Body() dto: RescheduleSessionDto,
    @Request() req,
  ) {
    return this.sessionsService.reschedule(req.user, parseInt(id), dto);
  }

  @Patch(':id')
  @UseGuards(RolesGuard)
  @Roles(Role.ADMIN)
  update(@Param('id') id: string, @Body() updateSessionDto: any) {
    return this.sessionsService.update(parseInt(id), updateSessionDto);
  }

  @Delete(':id')
  @UseGuards(RolesGuard)
  @Roles(Role.ADMIN)
  remove(@Param('id') id: string) {
    return this.sessionsService.cancel({ role: Role.ADMIN }, parseInt(id));
  }
}
