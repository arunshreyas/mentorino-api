import { IsNotEmpty, IsString } from "class-validator";

export class CreateTaskActivityDto {
    
    @IsString()
    user_id: string;
    @IsNotEmpty()
    @IsString()
    user_name: string;
    @IsNotEmpty()
    @IsString()
    status: string;
    @IsNotEmpty()
    @IsString()
    admin_response: string;
    @IsNotEmpty()
    @IsString()
    pb_card_details: string;
    @IsNotEmpty()
    @IsString()
    pb_linkedin_url: string;
    @IsNotEmpty()
    @IsString()
    pb_resume_link: string; 
    @IsNotEmpty()
    @IsString()
    pb_cover_letter_link: string;
    @IsNotEmpty()
    @IsString()
    pb_dress_code_notes: string;
    @IsNotEmpty()
    @IsString()
    pb_greeting_intro_notes: string;
    @IsNotEmpty()
    @IsString()
    net_attended_event: string;
    @IsNotEmpty()
    @IsString()
    net_people_met: string;
    @IsNotEmpty()
    @IsString()
    net_contact_info: string;
    @IsNotEmpty()
    @IsString()
    net_panel_summary: string;
    @IsNotEmpty()
    @IsString()
    pw_introduction: string;
    @IsNotEmpty()
    @IsString()
    pw_volunteer_hours: string;
    @IsNotEmpty()
    @IsString()
    cert_topic: string;
    @IsNotEmpty()
    @IsString()
    roadmap_topic: string;
    @IsNotEmpty()
    @IsString()
    interview_recommendation: string;
}
