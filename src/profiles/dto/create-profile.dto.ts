import { IsArray, IsBoolean, IsDate, IsIn, IsNotEmpty, IsString } from "class-validator";

export class CreateProfileDto {
    @IsNotEmpty()
    @IsString()
    email: string;
    @IsNotEmpty()
    @IsString()
    name: string;
    @IsNotEmpty()
    @IsString()
    @IsIn(["student", "mentor"])
    role: string;
    @IsNotEmpty()
    @IsArray()
    @IsString({ each: true })
    tasks: string[];
    @IsNotEmpty()
    @IsDate()
    created_at: Date;
    @IsNotEmpty()
    @IsDate()
    updated_at: Date;
    @IsNotEmpty()
    @IsDate()
    deleted_at: Date;
    @IsNotEmpty()
    @IsBoolean()
    is_active: boolean;
    @IsNotEmpty()
    @IsBoolean()
    is_deleted: boolean;
    @IsNotEmpty()
    @IsBoolean()
    is_verified: boolean;
    @IsNotEmpty()
    @IsBoolean()
    is_blocked: boolean;
    @IsNotEmpty()
    @IsBoolean()
    is_suspended: boolean;
}
