import { validateOrThrow } from "@/lib/utils/zod";

import kakaoAccountApi from "@/domains/auth/datasources/kakaoAccountApi";
import { KakaoAccountResDto, kakaoAccountResDtoSchema } from "@/domains/auth/dtos/response/kakaoAccountResDto";

const fetchKakaoEmail = async (token: string): Promise<string> => {
  const apiResponse: KakaoAccountResDto = await kakaoAccountApi(token);

  const validatedData: KakaoAccountResDto = validateOrThrow(kakaoAccountResDtoSchema, apiResponse);

  const kakaoEmail: string = validatedData.kakao_account.email;

  return kakaoEmail;
};

export default fetchKakaoEmail;
