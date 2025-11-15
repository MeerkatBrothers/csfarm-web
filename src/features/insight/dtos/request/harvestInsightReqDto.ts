import { z } from "zod";

export const harvestInsightReqDtoSchema = z.object({
  insightId: z.number(),
});

export type HarvestInsightReqDto = z.infer<typeof harvestInsightReqDtoSchema>;
