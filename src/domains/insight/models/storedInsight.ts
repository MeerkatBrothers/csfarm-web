import { z } from "zod";

import { insightPreviewSchema } from "@/domains/insight/models/fragments/insightPreview";

export const storedInsightSchema = z.object({
  insights: z.array(insightPreviewSchema),
});

export type StoredInsight = z.infer<typeof storedInsightSchema>;
