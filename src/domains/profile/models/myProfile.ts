import { z } from "zod";

import { profileSchema } from "@/domains/profile/models/fragments/profile";

export const myProfileSchema = z.object({
  profile: profileSchema,
});

export type MyProfile = z.infer<typeof myProfileSchema>;
