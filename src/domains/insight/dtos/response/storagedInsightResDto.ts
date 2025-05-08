import { z } from "zod";

import { insightPreviewDtoSchema } from "@/domains/insight/dtos/fragments/insightPreviewDto";

export const storagedInsightResDtoSchema = z.object({
  insights: z.array(insightPreviewDtoSchema),
});

export type StoragedInsightResDto = z.infer<typeof storagedInsightResDtoSchema>;
