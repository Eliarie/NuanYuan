import { z } from 'zod';

export const UserRoleSchema = z.enum(['teacher', 'parent']);
export type UserRole = z.infer<typeof UserRoleSchema>;

export const UserChildSchema = z.object({
  id: z.string(),
  role: z.string().describe('家长角色（如爸爸、妈妈、爷爷等）'),
});
export type UserChild = z.infer<typeof UserChildSchema>;

export const UserSchema = z.object({
  id: z.string().uuid(),
  role: UserRoleSchema,
  phone: z.string().optional(),
  name: z.string().optional(),
  classIds: z.array(z.string()).optional().describe('教师关联的班级ID列表'),
  children: z.array(UserChildSchema).optional().describe('家长绑定的孩子列表及对应角色'),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});
export type User = z.infer<typeof UserSchema>;
