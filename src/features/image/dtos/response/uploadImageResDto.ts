import { z } from "zod";

export const uploadImageResDtoSchema = z.object({
  imageUrl: z.string(),
});

export type UploadImageResDto = z.infer<typeof uploadImageResDtoSchema>;
