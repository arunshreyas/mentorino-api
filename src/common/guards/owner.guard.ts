import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class OwnerGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    const resourceId = request.params.id;
    const resourceUserId = request.params.user_id || request.body.user_id;

    // Admin and mentor can access all resources
    if (user.role === 'admin' || user.role === 'mentor') {
      return true;
    }

    // Users can only access their own resources
    return (
      user.sub === resourceId ||
      user.sub === resourceUserId ||
      user.email === resourceUserId
    );
  }
}
