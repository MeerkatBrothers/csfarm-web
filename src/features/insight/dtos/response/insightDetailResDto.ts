import { z } from 'zod';

import { insightDtoSchema } from '@/features/insight/dtos/fragments/insightDto';

export const insightDetailResDtoSchema = z.object({
  insight: insightDtoSchema,
});

export type InsightDetailResDto = z.infer<typeof insightDetailResDtoSchema>;
