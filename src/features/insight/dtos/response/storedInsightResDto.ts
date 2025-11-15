import { z } from 'zod';

import { weeklyInsightDtoSchema } from '@/features/insight/dtos/fragments/weeklyInsightDto';

export const storedInsightResDtoSchema = z.object({
  weeklyInsights: z.array(weeklyInsightDtoSchema),
});

export type StoredInsightResDto = z.infer<typeof storedInsightResDtoSchema>;
