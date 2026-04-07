import { z } from 'zod';

export const ChildStatusSchema = z.enum(["良好", "需关注"]);
export type ChildStatus = z.infer<typeof ChildStatusSchema>;

export const DimensionSchema = z.object({
  label: z.string(),
  score: z.number(),
});
export type Dimension = z.infer<typeof DimensionSchema>;

export const ChildParentSchema = z.object({
  id: z.string(),
  role: z.string().describe('家长角色（如爸爸、妈妈、爷爷等）'),
});
export type ChildParent = z.infer<typeof ChildParentSchema>;

export const ChildProfileSchema = z.object({
  id: z.string(),
  name: z.string(),
  avatar: z.string().optional(),
  status: ChildStatusSchema,
  tags: z.array(z.string()).optional(),
  dimensions: z.array(DimensionSchema).optional(),
  parents: z.array(ChildParentSchema).optional().describe('绑定的家长列表'),
});
export type ChildProfile = z.infer<typeof ChildProfileSchema>;

export const TimelineItemTypeSchema = z.enum(['observation', 'strategy', 'result', 'notification']);
export type TimelineItemType = z.infer<typeof TimelineItemTypeSchema>;

export const TimelineItemSchema = z.object({
  id: z.string(),
  date: z.string().datetime(),
  content: z.string(),
  type: TimelineItemTypeSchema,
  teacherId: z.string().optional().describe('记录此条观察的教师ID'),
  teacherName: z.string().optional().describe('记录此条观察的教师姓名'),
});
export type TimelineItem = z.infer<typeof TimelineItemSchema>;
