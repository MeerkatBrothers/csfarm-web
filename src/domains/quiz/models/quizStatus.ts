import { z } from "zod";

export const quizStatusSchema = z.object({
  quizId: z.number(),
  isThreshed: z.boolean(),
});

export type QuizStatus = z.infer<typeof quizStatusSchema>;
