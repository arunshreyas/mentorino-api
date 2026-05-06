import { IsString, IsNotEmpty, IsOptional, IsNumber, IsArray } from "class-validator";

export class CreateApplicationDto {
    @IsOptional()  // Allow creation without user_id
    @IsString()
    id?: string;
    
    @IsNotEmpty()
    @IsString()
    user_name: string;
    
    @IsNotEmpty()
    @IsString()
    user_email: string;
    
    @IsOptional()
    @IsString()
    user_phone?: string;
    
    @IsNotEmpty()
    @IsString()
    mentor_type: string;
    
    @IsOptional()
    @IsString()
    meeting_preference?: string;
    
    @IsOptional()
    @IsString()
    frequency?: string;
    
    @IsOptional()
    @IsString()
    goals?: string;
    
    @IsOptional()
    @IsNumber()
    seriousness?: number;
    
    @IsOptional()
    @IsString()
    attribution?: string;
    
    @IsOptional()
    @IsString()
    source?: string;
    
    @IsOptional()
    @IsArray()
    tags?: string[];
    
    @IsOptional()
    @IsArray()
    notes?: string[];
    
    @IsOptional()
    @IsString()
    pillar?: string;
    
    @IsOptional()
    @IsString()
    experience?: string;
    
    @IsOptional()
    @IsString()
    user_id?: string;
    
    @IsOptional()
    @IsString()
    status?: string;
    
    @IsOptional()
    created_at?: Date;
}
