import { z } from "zod";

export const insightPreviewDtoSchema = z.object({
  id: z.number(),
  subject: z.string(),
  publishedAt: z.coerce.date(),
  createdAt: z.coerce.date(),
});

export type InsightPreviewDto = z.infer<typeof insightPreviewDtoSchema>;
