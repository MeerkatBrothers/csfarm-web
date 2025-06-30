import { z } from "zod";

export const threshQuizReqDtoSchema = z.object({
  quizId: z.number(),
  choiceId: z.number(),
});

export type ThreshQuizReqDto = z.infer<typeof threshQuizReqDtoSchema>;
