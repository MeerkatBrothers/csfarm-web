import { validateOrThrow } from "@/lib/utils/zod";

import kakaoTokenApi from "@/domains/auth/datasources/kakaoTokenApi";
import { KakaoTokenResDto, kakaoTokenResDtoSchema } from "@/domains/auth/dtos/response/kakaoTokenResDto";

const fetchKakaoToken = async (code: string): Promise<string> => {
  const apiResponse: KakaoTokenResDto = await kakaoTokenApi(code);

  const validatedData: KakaoTokenResDto = validateOrThrow(kakaoTokenResDtoSchema, apiResponse);

  const kakaoToken: string = validatedData.access_token;

  return kakaoToken;
};

export default fetchKakaoToken;
