import { z } from "zod";

export const subInsightDtoSchema = z.object({
  id: z.number(),
  insightId: z.number(),
  subject: z.string(),
  description: z.string(),
  createdAt: z.coerce.date(),
});

export type SubInsightDto = z.infer<typeof subInsightDtoSchema>;
