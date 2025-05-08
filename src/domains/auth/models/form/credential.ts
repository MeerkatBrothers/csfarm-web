import { z } from "zod";

import { objectValuesToTuple } from "@/lib/utils/transformer/object";

import { LOGIN_PLATFORM } from "@/domains/auth/enums/loginPlatform";

export const credentialFormSchema = z.object({
  identifier: z.string(),
  loginPlatform: z.enum(objectValuesToTuple(LOGIN_PLATFORM)),
});

export type CredentialForm = z.infer<typeof credentialFormSchema>;
