import { z } from "zod";

import { tokenDtoSchema } from "@/domains/auth/dtos/tokenDto";

export const signUpResDtoSchema = z.object({
  id: z.number(),
  token: tokenDtoSchema,
  createdAt: z.coerce.date(),
});

export type SignUpResDto = z.infer<typeof signUpResDtoSchema>;
