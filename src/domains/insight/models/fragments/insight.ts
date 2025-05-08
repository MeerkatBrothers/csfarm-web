import { z } from "zod";

import { subInsightSchema } from "@/domains/insight/models/fragments/subInsight";

export const insightSchema = z.object({
  id: z.number(),
  subject: z.string(),
  description: z.string(),
  subInsights: z.array(subInsightSchema),
  publishedAt: z.coerce.date(),
  createdAt: z.coerce.date(),
});

export type Insight = z.infer<typeof insightSchema>;
