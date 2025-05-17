import { z } from "zod";

export const profileDtoSchema = z.object({
  id: z.number(),
  memberId: z.number(),
  nickname: z.string(),
  profileImageUrl: z.string(),
  createdAt: z.coerce.date(),
});

export type ProfileDto = z.infer<typeof profileDtoSchema>;
