import { z } from "zod";

export const insightStatusSchema = z.object({
  insightId: z.number(),
  isHarvested: z.boolean(),
});

export type InsightStatus = z.infer<typeof insightStatusSchema>;
