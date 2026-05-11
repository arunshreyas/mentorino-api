import { IsNotEmpty, IsString } from 'class-validator';

export class RescheduleSessionDto {
  @IsString()
  @IsNotEmpty()
  availabilitySlotId: string;
}
