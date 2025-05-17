import { z } from "zod";

import { profileDtoSchema } from "@/domains/profile/dtos/fragments/profileDto";

export const myProfileResDtoSchema = z.object({
  profile: profileDtoSchema,
});

export type MyProfileResDto = z.infer<typeof myProfileResDtoSchema>;
