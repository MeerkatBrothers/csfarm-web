import { z } from 'zod';

import { ACCEPTED_IMAGE_TYPES, MAX_IMAGE_SIZE } from '@/features/image/constants/constraint';
import { ImageErrorCode } from '@/features/image/errors/profile-error-code';

export const imageFormSchema = z.object({
  image: z
    .instanceof(File)
    .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file.type), {
      error: ImageErrorCode.INVALID_IMAGE_TYPE,
    })
    .refine((file) => file.size <= MAX_IMAGE_SIZE, {
      error: ImageErrorCode.IMAGE_SIZE_TOO_BIG,
    }),
});

export type ImageForm = z.infer<typeof imageFormSchema>;
