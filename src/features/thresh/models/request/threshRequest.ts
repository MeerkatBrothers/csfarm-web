import { z } from 'zod';

export const threshRequestSchema = z.object({
  quizId: z.string(),
  choiceId: z.string(),
});

export type ThreshRequest = z.infer<typeof threshRequestSchema>;
