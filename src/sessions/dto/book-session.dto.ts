import { IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';

export class BookSessionDto {
  @IsString()
  @IsNotEmpty()
  availabilitySlotId: string;

  @IsOptional()
  @IsString()
  @MaxLength(120)
  title?: string;

  @IsOptional()
  @IsString()
  @MaxLength(1000)
  description?: string;

  @IsOptional()
  @IsString()
  @MaxLength(1000)
  notes?: string;
}
