import { z } from "zod";

export const insightPreviewSchema = z.object({
  id: z.number(),
  subject: z.string(),
  publishedAt: z.coerce.date(),
  createdAt: z.coerce.date(),
});

export type InsightPreview = z.infer<typeof insightPreviewSchema>;
