import { z } from "zod";

import { quizDtoSchema } from "@/domains/quiz/dtos/fragments/quizDto";

export const todayQuizResDtoSchema = z.object({
  quiz: quizDtoSchema,
});

export type TodayQuizResDto = z.infer<typeof todayQuizResDtoSchema>;
