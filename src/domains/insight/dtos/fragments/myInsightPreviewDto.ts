import { z } from "zod";

export const myInsightPreviewDtoSchema = z.object({
  id: z.number(),
  subject: z.string(),
  isThreshed: z.boolean(),
  publishedAt: z.coerce.date(),
  createdAt: z.coerce.date(),
});

export type MyInsightPreviewDto = z.infer<typeof myInsightPreviewDtoSchema>;
