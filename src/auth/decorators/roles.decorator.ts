import { SetMetadata } from '@nestjs/common';

export const ROLES_KEY = 'roles';
export type UserRole = 'USER' | 'MENTOR' | 'ADMIN';

export const Roles = (...roles: UserRole[]) => SetMetadata(ROLES_KEY, roles);

// Export role constants for consistency
export const ROLES = {
  USER: 'USER' as const,
  MENTOR: 'MENTOR' as const,
  ADMIN: 'ADMIN' as const,
} as const;
