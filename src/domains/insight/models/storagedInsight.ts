import { z } from "zod";

import { insightPreviewSchema } from "@/domains/insight/models/fragments/insightPreview";

export const storagedInsightSchema = z.object({
  insights: z.array(insightPreviewSchema),
});

export type StoragedInsight = z.infer<typeof storagedInsightSchema>;
