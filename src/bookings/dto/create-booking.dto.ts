import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateBookingDto {
    @IsNotEmpty()
    @IsString()
    user_id: string;
    @IsNotEmpty()
    @IsString()
    user_name: string;
    @IsNotEmpty()
    @IsString()
    date: string;
    @IsNotEmpty()
    @IsString()
    time: string;
    @IsOptional()
    @IsString()
    status: "upcoming" | "completed" | "cancelled" = "upcoming";
    @IsOptional()
    @IsString()
    notes?: string;
}
