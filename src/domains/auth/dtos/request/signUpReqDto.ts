import { z } from "zod";

import { credentialDtoSchema } from "@/domains/auth/dtos/credentialDto";

export const signUpReqDtoSchema = z.object({
  credential: credentialDtoSchema,
});

export type SignUpReqDto = z.infer<typeof signUpReqDtoSchema>;
