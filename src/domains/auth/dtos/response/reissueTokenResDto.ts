import { z } from "zod";

import { tokenDtoSchema } from "@/domains/auth/dtos/tokenDto";

export const reissueTokenResDtoSchema = z.object({
  token: tokenDtoSchema,
});

export type ReissueTokenResDto = z.infer<typeof reissueTokenResDtoSchema>;
