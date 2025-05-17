import { z } from "zod";

import { profileFormDtoSchema } from "@/domains/profile/dtos/fragments/profileFormDto";

export const modifyProfileReqDtoSchema = z.object({
  profile: profileFormDtoSchema,
});

export type ModifyProfileReqDto = z.infer<typeof modifyProfileReqDtoSchema>;
