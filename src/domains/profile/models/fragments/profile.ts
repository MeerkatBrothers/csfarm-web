import { z } from "zod";

export const profileSchema = z.object({
  id: z.number(),
  memberId: z.number(),
  nickname: z.string(),
  profileImageUrl: z.string().nullable(),
  createdAt: z.coerce.date(),
});

export type Profile = z.infer<typeof profileSchema>;
