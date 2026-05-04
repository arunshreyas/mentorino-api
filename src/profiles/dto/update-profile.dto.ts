import { PartialType } from '@nestjs/mapped-types';
import { CreateProfileDto } from './create-profile.dto';
import { IsArray, IsDate, IsIn, IsOptional, IsString } from 'class-validator';

export class UpdateProfileDto extends PartialType(CreateProfileDto) {
    @IsOptional()
    @IsString()
    email?: string;
    @IsOptional()
    @IsString()
    name?: string;
    @IsOptional()
    @IsString()
    @IsIn(["student", "mentor"])
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
