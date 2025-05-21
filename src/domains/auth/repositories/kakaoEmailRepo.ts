import { validateOrThrow } from "@/lib/utils/zod";

import kakaoAccountSource from "@/domains/auth/datasources/kakaoAccountSource";
import { KakaoAccountResDto, kakaoAccountResDtoSchema } from "@/domains/auth/dtos/response/kakaoAccountResDto";

const kakaoEmailRepo = async (kakaoToken: string): Promise<string> => {
  const apiResponse: KakaoAccountResDto = await kakaoAccountSource(kakaoToken);

  const validatedData: KakaoAccountResDto = validateOrThrow(kakaoAccountResDtoSchema, apiResponse);

  const kakaoEmail: string = validatedData.kakao_account.email;

  return kakaoEmail;
};

export default kakaoEmailRepo;
