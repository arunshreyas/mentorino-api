import { Injectable, UnauthorizedException, BadRequestException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma.service';
import { LoginDto, RegisterDto } from './dto/login.dto';
import { Role } from '../generated/prisma/client';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.prisma.profiles.findUnique({
      where: { email },
    });

    if (user && user.password) {
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (isPasswordValid) {
        const { password, ...result } = user;
        return result;
      }
    }
    return null;
  }

  async login(loginDto: LoginDto) {
    const user = await this.validateUser(loginDto.email, loginDto.password);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = { email: user.email, sub: user.id, role: user.role };
    return {
      access_token: this.jwtService.sign(payload),
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
      },
    };
  }

  async register(registerDto: RegisterDto) {
    // Validate password strength
    if (registerDto.password.length < 6) {
      throw new BadRequestException('Password must be at least 6 characters long');
    }

    // Check if user already exists
    const existingUser = await this.prisma.profiles.findUnique({
      where: { email: registerDto.email },
    });

    if (existingUser) {
      throw new UnauthorizedException('User already exists');
    }

    // Hash password with bcrypt
    const saltRounds = 12;
    const hashedPassword = await bcrypt.hash(registerDto.password, saltRounds);

    // Create user with proper role
    const user = await this.prisma.profiles.create({
      data: {
        id: crypto.randomUUID(),
        email: registerDto.email,
        name: registerDto.name,
        password: hashedPassword,
        role: Role.USER,
      },
    });

    // If mentor type provided, create application
    if (registerDto.mentorType) {
      await this.prisma.applications.create({
        data: {
          user_email: registerDto.email,
          mentor_type: registerDto.mentorType,
          status: 'pending',
        },
      });
    }

    const { password, ...result } = user;
    const payload = { email: result.email, sub: result.id, role: result.role };
    
    return {
      access_token: this.jwtService.sign(payload),
      user: result,
    };
  }

  async logout(token: string) {
    // In a production environment, you might want to implement token blacklisting
    // For now, we'll just return a success message
    // Client-side should remove the token
    return { message: 'Logout successful' };
  }

  async changePassword(userId: string, currentPassword: string, newPassword: string) {
    if (newPassword.length < 6) {
      throw new BadRequestException('New password must be at least 6 characters long');
    }

    const user = await this.prisma.profiles.findUnique({
      where: { id: userId },
    });

    if (!user || !user.password) {
      throw new UnauthorizedException('User not found');
    }

    // Verify current password
    const isCurrentPasswordValid = await bcrypt.compare(currentPassword, user.password);
    if (!isCurrentPasswordValid) {
      throw new UnauthorizedException('Current password is incorrect');
    }

    // Hash new password
    const saltRounds = 12;
    const hashedNewPassword = await bcrypt.hash(newPassword, saltRounds);

    // Update password
    await this.prisma.profiles.update({
      where: { id: userId },
      data: { password: hashedNewPassword },
    });

    return { message: 'Password changed successfully' };
  }

  async getProfile(userId: string) {
    const user = await this.prisma.profiles.findUnique({
      where: { id: userId },
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        created_at: true,
      },
    });

    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    return user;
  }

  async refreshToken(user: any) {
    const payload = { email: user.email, sub: user.sub, role: user.role };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
