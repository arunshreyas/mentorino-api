import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskActivityDto } from './create-task-activity.dto';
import { IsOptional, IsString } from 'class-validator';

export class UpdateTaskActivityDto extends PartialType(CreateTaskActivityDto) {
    @IsOptional()
    @IsString()
    status?: string;
    @IsOptional()
    @IsString()
    admin_response?: string;
    @IsOptional()
    @IsString()
    pb_card_details?: string;
    @IsOptional()
    @IsString()
    pb_linkedin_url?: string;
    @IsOptional()
    @IsString()
    pb_resume_link?: string;
    @IsOptional()
    @IsString()
    pb_cover_letter_link?: string;
    @IsOptional()
    @IsString()
    pb_dress_code_notes?: string;
    @IsOptional()
    @IsString()
    pb_greeting_intro_notes?: string;
    @IsOptional()
    @IsString()
    net_attended_event?: string;
    @IsOptional()
    @IsString()
    net_people_met?: string;
    @IsOptional()
    @IsString()
    net_contact_info?: string;
}
