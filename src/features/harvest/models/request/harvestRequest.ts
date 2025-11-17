import { z } from 'zod';

export const harvestRequestSchema = z.object({
  insightId: z.string(),
});

export type HarvestRequest = z.infer<typeof harvestRequestSchema>;
