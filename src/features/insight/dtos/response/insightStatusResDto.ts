import { z } from "zod";

export const insightStatusResDtoSchema = z.object({
  insightId: z.number(),
  isHarvested: z.boolean(),
});

export type InsightStatusResDto = z.infer<typeof insightStatusResDtoSchema>;
