import { z } from "zod";

import { tokenDtoSchema } from "@/domains/auth/dtos/fragments/tokenDto";

export const signInResDtoSchema = z.object({
  token: tokenDtoSchema,
});

export type SignInResDto = z.infer<typeof signInResDtoSchema>;
