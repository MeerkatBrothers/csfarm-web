import { z } from "zod";

export const profileFormDtoSchema = z.object({
  nickname: z.string(),
  profileImageUrl: z.string().nullable(),
});

export type ProfileFormDto = z.infer<typeof profileFormDtoSchema>;
