import { z } from "zod";

import { subInsightDtoSchema } from "@/domains/insight/dtos/fragments/subInsightDto";

export const insightDtoSchema = z.object({
  id: z.number(),
  subject: z.string(),
  description: z.string(),
  subInsights: z.array(subInsightDtoSchema),
  publishedAt: z.coerce.date(),
  createdAt: z.coerce.date(),
});

export type InsightDto = z.infer<typeof insightDtoSchema>;
