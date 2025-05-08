import { z } from "zod";

export const myInsightPreviewSchema = z.object({
  id: z.number(),
  subject: z.string(),
  isThreshed: z.boolean(),
  publishedAt: z.coerce.date(),
  createdAt: z.coerce.date(),
});

export type myInsightPreview = z.infer<typeof myInsightPreviewSchema>;
