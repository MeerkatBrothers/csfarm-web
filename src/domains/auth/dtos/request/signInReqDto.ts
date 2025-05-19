import { z } from "zod";

import { credentialFormDtoSchema } from "@/domains/auth/dtos/fragments/credentialFormDto";

export const signInReqDtoSchema = z.object({
  credential: credentialFormDtoSchema,
});

export type SignInReqDto = z.infer<typeof signInReqDtoSchema>;
