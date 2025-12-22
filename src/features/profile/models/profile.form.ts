import { z } from 'zod';

import { MAX_NICKNAME_LENGHT, MIN_NICKNAME_LENGHT } from '@/features/profile/constants/constraint';
import { ProfileErrorCode } from '@/features/profile/errors/profile-error-code';

export const profileFormSchema = z.object({
  nickname: z
    .string()
    .nonempty({ error: ProfileErrorCode.NICKNAME_FORM_EMPTY })
    .max(MAX_NICKNAME_LENGHT, { error: ProfileErrorCode.NICKNAME_FORM_TOO_LONG })
    .min(MIN_NICKNAME_LENGHT, { error: ProfileErrorCode.NICKNAME_FORM_TOO_SHORT }),
  profileImageUrl: z.string().nullable(),
});

export type ProfileForm = z.infer<typeof profileFormSchema>;
