import { z } from "zod";

export const quizChoiceDtoSchema = z.object({
  id: z.number(),
  quizId: z.number(),
  content: z.string(),
  order: z.number(),
  createdAt: z.coerce.date(),
});

export type QuizChoiceDto = z.infer<typeof quizChoiceDtoSchema>;
