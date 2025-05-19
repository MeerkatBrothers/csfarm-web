import { z } from "zod";

import { kakaoAccountDtoSchema } from "@/domains/auth/dtos/fragments/kakaoAccountDto";

export const kakaoAccountResDtoSchema = z.object({
  id: z.number(),
  kakao_account: kakaoAccountDtoSchema,
  connected_at: z.coerce.date(),
});

export type KakaoAccountResDto = z.infer<typeof kakaoAccountResDtoSchema>;
