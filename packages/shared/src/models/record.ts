import { z } from 'zod';

export const RawRecordSchema = z.object({
  id: z.string(),
  childId: z.string(),
  teacherId: z.string().describe('提交该记录的教师ID，用于区分不同教师的视角'),
  classId: z.string().describe('记录发生时的班级ID'),
  content: z.string().describe('教师原始的吐槽/语音转录文本'),
  createdAt: z.string().datetime(),
});
export type RawRecord = z.infer<typeof RawRecordSchema>;

export const SharedRecordTypeSchema = z.enum(['activity', 'message']);
export type SharedRecordType = z.infer<typeof SharedRecordTypeSchema>;

export const SharedRecordSchema = z.object({
  id: z.string().describe('公开记录的唯一 ID'),
  childId: z.string().describe('幼儿 ID'),
  originalDate: z.string().datetime().describe('记录发生的日期'),
  highlight: z.string().describe('高光时刻一句话摘要'),
  detail: z.string().describe('具体详细的正面反馈文案或打出的建议'),
  type: SharedRecordTypeSchema.optional().describe('记录类型'),
});
export type SharedRecord = z.infer<typeof SharedRecordSchema>;
