import { z } from "zod";

import { objectValuesToTuple } from "@/lib/utils/transformer/object";

import { LOGIN_PLATFORM } from "@/domains/auth/enums/loginPlatform";

export const credentialDtoSchema = z.object({
  identifier: z.string(),
  loginPlatform: z.enum(objectValuesToTuple(LOGIN_PLATFORM)),
});

export type CredentialDto = z.infer<typeof credentialDtoSchema>;
