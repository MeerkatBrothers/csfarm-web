import { validateOrThrow } from "@/lib/utils/zod";

import kakaoTokenSource from "@/domains/auth/datasources/kakaoTokenSource";
import { KakaoTokenResDto, kakaoTokenResDtoSchema } from "@/domains/auth/dtos/response/kakaoTokenResDto";

const kakaoTokenRepo = async (kakaoCode: string): Promise<string> => {
  const apiResponse: KakaoTokenResDto = await kakaoTokenSource(kakaoCode);

  const validatedData: KakaoTokenResDto = validateOrThrow(kakaoTokenResDtoSchema, apiResponse);

  const kakaoToken: string = validatedData.access_token;

  return kakaoToken;
};

export default kakaoTokenRepo;
