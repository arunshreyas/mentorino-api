import { IsString, IsNotEmpty } from "class-validator";

export class CreateApplicationDto {
    @IsNotEmpty()
    @IsString()
    user_email: string;   
    @IsNotEmpty()
    @IsString()
    mentor_type: string;
    @IsNotEmpty()
    @IsString()
    responses: string;  
}
