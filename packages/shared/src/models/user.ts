import { z } from 'zod';

export const UserRoleSchema = z.enum(['teacher', 'parent']);
export type UserRole = z.infer<typeof UserRoleSchema>;

export const UserSchema = z.object({
  id: z.string().uuid(),
  role: UserRoleSchema,
  phone: z.string().optional(),
  name: z.string().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});
export type User = z.infer<typeof UserSchema>;
