import { PartialType } from '@nestjs/mapped-types';
import { CreateProfileDto } from './create-profile.dto';
import { IsArray, IsDate, IsOptional, IsString } from 'class-validator';

export class UpdateProfileDto extends PartialType(CreateProfileDto) {
    @IsOptional()
    @IsString()
    email?: string;
    @IsOptional()
    @IsString()
    name?: string;
    @IsOptional()
    @IsString()
    role?: string;
    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    tasks?: string[];
    @IsOptional()
    @IsDate()
    created_at?: Date;
    @IsOptional()
    @IsDate()
    updated_at?: Date;
}
