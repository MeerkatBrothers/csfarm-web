import { z } from "zod";

import { objectValuesToTuple } from "@/lib/utils/transformer/object";

import { LOGIN_PLATFORM } from "@/domains/auth/enums/loginPlatform";

export const credentialFormDtoSchema = z.object({
  identifier: z.string().nonempty("회원 정보를 가져오지 못했어요. 다시 시도해 주세요."),
  loginPlatform: z.enum(objectValuesToTuple(LOGIN_PLATFORM), { message: "올바르지 않은 로그인 채널이에요." }),
});

export type CredentialFormDto = z.infer<typeof credentialFormDtoSchema>;
