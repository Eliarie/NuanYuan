import { z } from 'zod';
import { UserRoleSchema, UserChildSchema } from '../models/user';
import { ChildProfileSchema, TimelineItemSchema } from '../models/child';
import { SharedRecordSchema } from '../models/record';

// Auth DTOs
export const LoginRequestSchema = z.object({
  code: z.string().describe('微信小程序 wx.login 获取的临时登录凭证'),
});
export type LoginRequestDTO = z.infer<typeof LoginRequestSchema>;

export const LoginResponseSchema = z.object({
  token: z.string(),
  role: UserRoleSchema,
  classIds: z.array(z.string()).optional().describe('教师关联的班级ID列表（仅教师角色返回）'),
  children: z.array(UserChildSchema).optional().describe('家长绑定的孩子列表及对应角色（仅家长角色返回）'),
});
export type LoginResponseDTO = z.infer<typeof LoginResponseSchema>;

// Teacher DTOs
export const TeacherChatRequestSchema = z.object({
  message: z.string().describe('教师真实的槽点文本'),
  classId: z.string().describe('当前吐槽上下文所在的班级ID'),
});
export type TeacherChatRequestDTO = z.infer<typeof TeacherChatRequestSchema>;

export const TeacherChildrenRequestSchema = z.object({
  classId: z.string().describe('班级ID'),
});
export type TeacherChildrenRequestDTO = z.infer<typeof TeacherChildrenRequestSchema>;

export const TeacherChildrenResponseSchema = z.array(ChildProfileSchema);
export type TeacherChildrenResponseDTO = z.infer<typeof TeacherChildrenResponseSchema>;

export const TeacherChildDetailResponseSchema = z.object({
  profile: ChildProfileSchema,
  timeline: z.array(TimelineItemSchema).optional(),
});
export type TeacherChildDetailResponseDTO = z.infer<typeof TeacherChildDetailResponseSchema>;

export const SendMessageRequestSchema = z.object({
  childId: z.string(),
  content: z.string().describe('发送给家长的具体文案'),
});
export type SendMessageRequestDTO = z.infer<typeof SendMessageRequestSchema>;

export const SendMessageResponseSchema = z.object({
  success: z.boolean(),
});
export type SendMessageResponseDTO = z.infer<typeof SendMessageResponseSchema>;

// Parent DTOs
export const ParentFeedResponseSchema = z.array(SharedRecordSchema);
export type ParentFeedResponseDTO = z.infer<typeof ParentFeedResponseSchema>;
