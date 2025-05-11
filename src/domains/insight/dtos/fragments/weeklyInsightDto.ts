import { z } from "zod";

import { insightPreviewDtoSchema } from "@/domains/insight/dtos/fragments/insightPreviewDto";

export const weeklyInsightDtoSchema = z.object({
  weekOffset: z.number(),
  insights: z.array(insightPreviewDtoSchema),
});

export type WeeklyInsightDto = z.infer<typeof weeklyInsightDtoSchema>;
