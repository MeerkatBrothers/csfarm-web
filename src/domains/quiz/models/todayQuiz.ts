import { z } from "zod";

import { quizSchema } from "@/domains/quiz/models/fragments/quiz";

export const todayQuizSchema = z.object({
  quiz: quizSchema,
});

export type TodayQuiz = z.infer<typeof todayQuizSchema>;
