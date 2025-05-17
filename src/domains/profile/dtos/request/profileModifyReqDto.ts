import { z } from "zod";

import { profileFormDtoSchema } from "@/domains/profile/dtos/fragments/profileFormDto";

export const profileModifyReqDtoSchema = z.object({
  profile: profileFormDtoSchema,
});

export type ProfileModifyReqDto = z.infer<typeof profileModifyReqDtoSchema>;
