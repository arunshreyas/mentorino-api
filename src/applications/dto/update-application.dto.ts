import { PartialType } from '@nestjs/mapped-types';
import { CreateApplicationDto } from './create-application.dto';
import { IsIn, IsOptional, IsString } from 'class-validator';

export class UpdateApplicationDto extends PartialType(CreateApplicationDto) {
    @IsOptional()
    @IsString()
    @IsIn(["pending", "accepted", "rejected", "reviewed"])
    status?: string;
    
    @IsOptional()
    @IsString()
    responses?: string;

    @IsOptional()
    @IsString()
    mentor_type?: string;
}
