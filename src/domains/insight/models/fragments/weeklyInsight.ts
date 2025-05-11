import { z } from "zod";

import { insightPreviewSchema } from "@/domains/insight/models/fragments/insightPreview";

export const weeklyInsightSchema = z.object({
  weekOffset: z.number(),
  insights: z.array(insightPreviewSchema),
});

export type WeeklyInsight = z.infer<typeof weeklyInsightSchema>;
