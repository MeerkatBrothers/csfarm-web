import { z } from 'zod';

import { tokenDtoSchema } from '@/features/auth/dtos/fragments/tokenDto';

export const reissueTokenResDtoSchema = z.object({
  token: tokenDtoSchema,
});

export type ReissueTokenResDto = z.infer<typeof reissueTokenResDtoSchema>;
