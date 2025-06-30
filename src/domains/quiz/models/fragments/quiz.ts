import { z } from "zod";

import { quizChoiceSchema } from "@/domains/quiz/models/fragments/quizChoice";

export const quizSchema = z.object({
  id: z.number(),
  insightId: z.number(),
  content: z.string(),
  choices: z.array(quizChoiceSchema),
  publishedAt: z.coerce.date(),
  createdAt: z.coerce.date(),
});

export type Quiz = z.infer<typeof quizSchema>;
