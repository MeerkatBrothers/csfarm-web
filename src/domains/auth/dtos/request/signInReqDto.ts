import { z } from "zod";

import { credentialDtoSchema } from "@/domains/auth/dtos/credentialDto";

export const signInReqDtoSchema = z.object({
  credential: credentialDtoSchema,
});

export type SignInReqDto = z.infer<typeof signInReqDtoSchema>;
