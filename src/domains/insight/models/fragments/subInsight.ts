import { z } from "zod";

export const subInsightSchema = z.object({
  id: z.number(),
  insightId: z.number(),
  subject: z.string(),
  description: z.string(),
  createdAt: z.coerce.date(),
});

export type SubInsight = z.infer<typeof subInsightSchema>;
