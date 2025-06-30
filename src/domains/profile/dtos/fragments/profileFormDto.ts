import { z } from "zod";

import { MAX_NICKNAME_LENGHT, MIN_NICKNAME_LENGHT } from "@/domains/profile/constants/constraint";

export const profileFormDtoSchema = z.object({
  nickname: z
    .string()
    .nonempty("농부명을 입력해 주세요.")
    .max(MAX_NICKNAME_LENGHT, { message: `농부명은 ${MAX_NICKNAME_LENGHT}자 이하로 입력해 주세요.` })
    .min(MIN_NICKNAME_LENGHT, { message: `농부명은 ${MIN_NICKNAME_LENGHT}자 이상 입력해 주세요.` }),
  profileImageUrl: z.string().nullable(),
});

export type ProfileFormDto = z.infer<typeof profileFormDtoSchema>;
