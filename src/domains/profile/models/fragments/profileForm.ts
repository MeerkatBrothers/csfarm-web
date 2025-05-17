import { z } from "zod";

export const profileFormSchema = z.object({
  nickname: z.string(),
  profileImageUrl: z.string(),
});

export type ProfileForm = z.infer<typeof profileFormSchema>;
