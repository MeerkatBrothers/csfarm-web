import { z } from 'zod';

import { progressDtoSchema } from '@/features/progress/dtos/fragments/progressDto';

export const myProgressResDtoSchema = z.object({
  progresses: z.array(progressDtoSchema),
});

export type MyProgressResDto = z.infer<typeof myProgressResDtoSchema>;
