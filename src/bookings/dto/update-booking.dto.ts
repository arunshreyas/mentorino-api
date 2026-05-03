import { PartialType } from '@nestjs/mapped-types';
import { CreateBookingDto } from './create-booking.dto';
import { IsOptional, IsString } from 'class-validator';

export class UpdateBookingDto extends PartialType(CreateBookingDto) {
    @IsOptional()
    @IsString()
    status?: "upcoming" | "completed" | "cancelled";
    @IsOptional()
    @IsString()
    notes?: string;
    @IsOptional()
    @IsString()
    user_name?: string;
    @IsOptional()
    @IsString()
    user_id?: string;
    @IsOptional()
    @IsString()
    date?: string;
    @IsOptional()
    @IsString()
    time?: string;
}
