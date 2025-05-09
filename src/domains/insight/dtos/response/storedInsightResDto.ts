import { z } from "zod";

import { insightPreviewDtoSchema } from "@/domains/insight/dtos/fragments/insightPreviewDto";

export const storedInsightResDtoSchema = z.object({
  insights: z.array(insightPreviewDtoSchema),
});

export type StoredInsightResDto = z.infer<typeof storedInsightResDtoSchema>;
