import { IsArray, IsEmail, IsIn, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";

export class CreateProfileDto {
    @IsNotEmpty()
    @IsEmail()
    email: string;
    @IsNotEmpty()
    @IsString()
    name: string;
    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    password: string;
    @IsNotEmpty()
    @IsString()
    @IsIn(["USER", "MENTOR", "ADMIN", "user", "mentor", "admin"])
    role: string;
    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    tasks: string[];
}
