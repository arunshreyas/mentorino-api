import { PartialType } from '@nestjs/mapped-types';
import { CreateEventDto } from './create-event.dto';
import { IsArray, IsOptional, IsString } from 'class-validator';

export class UpdateEventDto extends PartialType(CreateEventDto) {
    @IsOptional()
    @IsString()
    title?: string;
    @IsOptional()
    @IsString()
    date?: string;
    @IsOptional()
    @IsString()
    time?: string;
    @IsOptional()
    @IsString()
    location?: string;
    @IsOptional()
    @IsString()
    description?: string;
    @IsOptional()
    @IsString()
    link?: string;
    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    attendees?: string[];
}