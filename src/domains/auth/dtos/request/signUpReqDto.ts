import { z } from "zod";

import { credentialFormDtoSchema } from "@/domains/auth/dtos/fragments/credentialFormDto";

export const signUpReqDtoSchema = z.object({
  credential: credentialFormDtoSchema,
});

export type SignUpReqDto = z.infer<typeof signUpReqDtoSchema>;
