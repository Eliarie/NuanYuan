import { z } from 'zod';

export const ChildStatusSchema = z.enum(["良好", "需关注"]);
export type ChildStatus = z.infer<typeof ChildStatusSchema>;

export const DimensionSchema = z.object({
  label: z.string(),
  score: z.number(),
});
export type Dimension = z.infer<typeof DimensionSchema>;

export const ChildProfileSchema = z.object({
  id: z.string(),
  name: z.string(),
  avatar: z.string().optional(),
  status: ChildStatusSchema,
  tags: z.array(z.string()).optional(),
  dimensions: z.array(DimensionSchema).optional(),
});
export type ChildProfile = z.infer<typeof ChildProfileSchema>;

export const TimelineItemTypeSchema = z.enum(['observation', 'strategy', 'result', 'notification']);
export type TimelineItemType = z.infer<typeof TimelineItemTypeSchema>;

export const TimelineItemSchema = z.object({
  id: z.string(),
  date: z.string().datetime(),
  content: z.string(),
  type: TimelineItemTypeSchema,
});
export type TimelineItem = z.infer<typeof TimelineItemSchema>;
