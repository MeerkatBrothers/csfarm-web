import { z } from "zod";

import { quizChoiceDtoSchema } from "@/domains/quiz/dtos/fragments/quizChoiceDto";

export const quizDtoSchema = z.object({
  id: z.number(),
  insightId: z.number(),
  content: z.string(),
  choices: z.array(quizChoiceDtoSchema),
  publishedAt: z.coerce.date(),
  createdAt: z.coerce.date(),
});

export type QuizDto = z.infer<typeof quizDtoSchema>;
