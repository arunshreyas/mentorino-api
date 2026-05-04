import { Injectable, CanActivate, ExecutionContext, mixin } from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../../auth/guards/roles.guard';

export const AuthGuard = () => {
  return mixin(
    class extends JwtAuthGuard {
      async canActivate(context: ExecutionContext) {
        const jwtResult = await super.canActivate(context);
        if (!jwtResult) {
          return false;
        }

        const rolesGuard = new RolesGuard(new (require('@nestjs/core').Reflector)());
        return rolesGuard.canActivate(context);
      }
    },
  );
};
