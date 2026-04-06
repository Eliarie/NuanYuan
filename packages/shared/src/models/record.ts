import { z } from 'zod';

export const RawRecordSchema = z.object({
  id: z.string().uuid(),
  teacherId: z.string().uuid().optional(),
  childId: z.string().uuid().optional(),
  content: z.string(),
  createdAt: z.date(),
});
export type RawRecord = z.infer<typeof RawRecordSchema>;

export const SharedRecordTypeSchema = z.enum(['activity', 'message']);
export type SharedRecordType = z.infer<typeof SharedRecordTypeSchema>;

export const SharedRecordSchema = z.object({
  id: z.string(),
  childId: z.string(),
  originalDate: z.string().datetime(),
  highlight: z.string(),
  detail: z.string(),
  type: SharedRecordTypeSchema.optional(),
});
export type SharedRecord = z.infer<typeof SharedRecordSchema>;
