import {
  IsArray,
  IsEmail,
  IsInt,
  IsOptional,
  IsString,
  IsUrl,
  Max,
  MaxLength,
  Min,
} from 'class-validator';

export class UpdateProfileDto {
    @IsOptional()
    @IsEmail()
    email?: string;
    @IsOptional()
    @IsString()
    @MaxLength(120)
    name?: string;
    @IsOptional()
    @IsString()
    @MaxLength(2000)
    bio?: string;
    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    expertise?: string[];
    @IsOptional()
    @IsUrl({ require_protocol: true })
    profile_image_url?: string;
    @IsOptional()
    @IsInt()
    @Min(0)
    @Max(10000000)
    pricing_cents?: number;
    @IsOptional()
    @IsString()
    @MaxLength(80)
    timezone?: string;
}
