import { IsArray, IsNotEmpty, IsString } from "class-validator";

export class CreateEventDto {
    @IsNotEmpty()
    @IsString()
    title: string;
    @IsNotEmpty()
    @IsString()
    date: string;
    @IsNotEmpty()
    @IsString()
    time: string;
    @IsNotEmpty()
    @IsString()
    location: string;
    @IsNotEmpty()
    @IsString()
    description: string;
    @IsNotEmpty()
    @IsString()
    link: string;
    @IsNotEmpty()
    @IsArray()
    @IsString({ each: true })
    attendees?: string[];
}
