import { z } from "zod";

import { ACCEPTED_IMAGE_TYPES, MAX_IMAGE_SIZE } from "@/domains/image/constants/constraint";

export const uploadImageFormSchema = z.object({
  dir: z.string(),
  image: z
    .instanceof(File)
    .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file.type))
    .refine((file) => file.size <= MAX_IMAGE_SIZE),
});

export type UploadImageForm = z.infer<typeof uploadImageFormSchema>;
