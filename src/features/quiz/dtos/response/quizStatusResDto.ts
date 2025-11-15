import { z } from "zod";

export const quizStatusResDtoSchema = z.object({
  quizId: z.number(),
  isThreshed: z.boolean(),
});

export type QuizStatusResDto = z.infer<typeof quizStatusResDtoSchema>;
