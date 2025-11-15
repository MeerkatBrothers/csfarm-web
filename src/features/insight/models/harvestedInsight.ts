import { z } from 'zod';

import { myInsightPreviewSchema } from '@/features/insight/models/fragments/myInsightPreview';

export const harvestedInsightSchema = z.object({
  totalPage: z.number(),
  currentPage: z.number(),
  insights: z.array(myInsightPreviewSchema),
});

export type HarvestedInsight = z.infer<typeof harvestedInsightSchema>;
