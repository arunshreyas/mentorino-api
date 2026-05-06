import { Injectable, CanActivate, ExecutionContext, mixin } from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';

export const AuthGuard = () => {
  return mixin(
    class extends JwtAuthGuard {
      async canActivate(context: ExecutionContext) {
        const jwtResult = await super.canActivate(context);
        if (!jwtResult) {
          return false;
        }

        return true; // Temporarily bypass roles check
      }
    },
  );
};
