import { z } from 'zod';

import { LoginPlatform } from '@/features/auth/enums/loginPlatform';
import { AuthErrorCode } from '@/features/auth/errors/auth-error-code';

export const credentialFormSchema = z.object({
  identifier: z.string().nonempty({ error: AuthErrorCode.INVALID_IDENTIFIER }),
  loginPlatform: z.enum(LoginPlatform, {
    error: AuthErrorCode.INVALID_LOGIN_PLATFORM,
  }),
});

export type CredentialForm = z.infer<typeof credentialFormSchema>;
