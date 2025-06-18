import { z } from "zod";

import { ACCEPTED_IMAGE_TYPES, MAX_IMAGE_SIZE } from "@/domains/image/constants/constraint";

export const uploadImageReqDtoSchema = z.object({
  image: z
    .instanceof(File, { message: "이미지 파일만 사용 가능해요." })
    .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file.type), { message: "지원하지 않는 이미지 형식이에요." })
    .refine((file) => file.size <= MAX_IMAGE_SIZE, { message: `이미지 용량은 최대 ${Math.round(MAX_IMAGE_SIZE / 1024 / 1024)}MB예요.` }),
});

export type UploadImageReqDto = z.infer<typeof uploadImageReqDtoSchema>;
