import { z } from "zod";

import { profileFormDtoSchema } from "@/domains/profile/dtos/fragments/profileFormDto";

export const updateProfileReqDtoSchema = z.object({
  profile: profileFormDtoSchema,
});

export type UpdateProfileReqDto = z.infer<typeof updateProfileReqDtoSchema>;
