import { z } from "zod";

export const quizChoiceSchema = z.object({
  id: z.number(),
  quizId: z.number(),
  content: z.string(),
  order: z.number(),
  createdAt: z.coerce.date(),
});

export type QuizChoice = z.infer<typeof quizChoiceSchema>;
