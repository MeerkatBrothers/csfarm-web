import { z } from "zod";

export const myInsightPreviewSchema = z.object({
  insightId: z.number(),
  subject: z.string(),
  isThreshed: z.boolean(),
  publishedAt: z.coerce.date(),
  createdAt: z.coerce.date(),
});

export type MyInsightPreview = z.infer<typeof myInsightPreviewSchema>;
