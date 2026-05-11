import { IsISO8601, IsOptional, IsString } from 'class-validator';

export class CreateAvailabilityDto {
  @IsOptional()
  @IsString()
  mentorId?: string;

  @IsISO8601()
  startTime: string;

  @IsISO8601()
  endTime: string;
}
