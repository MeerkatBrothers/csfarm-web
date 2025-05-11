import { z } from "zod";

import { weeklyInsightSchema } from "@/domains/insight/models/fragments/weeklyInsight";

export const storedInsightSchema = z.object({
  weeklyInsights: z.array(weeklyInsightSchema),
});

export type StoredInsight = z.infer<typeof storedInsightSchema>;
