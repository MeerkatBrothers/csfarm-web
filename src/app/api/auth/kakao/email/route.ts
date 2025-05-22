import { NextResponse } from "next/server";

import { Result, success, failed } from "@/lib/types/result";
import { validateOrThrow } from "@/lib/utils/zod";
import { parseQueryParam } from "@/lib/utils/parser/api";
import UnauthorizedError from "@/lib/errors/http/unauthorizedError";

import kakaoTokenSource from "@/domains/auth/datasources/kakaoTokenSource";
import kakaoAccountSource from "@/domains/auth/datasources/kakaoAccountSource";
import { KakaoTokenResDto, kakaoTokenResDtoSchema } from "@/domains/auth/dtos/response/kakaoTokenResDto";
import { KakaoAccountResDto, kakaoAccountResDtoSchema } from "@/domains/auth/dtos/response/kakaoAccountResDto";

export const GET = async (request: Request): Promise<NextResponse<Result<string>>> => {
  try {
    const url: URL = new URL(request.url);
    const kakaoCode: string | null = parseQueryParam(url, "code");
    if (!kakaoCode) {
      throw new UnauthorizedError();
    }

    const kakaoTokenApiResponse: KakaoTokenResDto = await kakaoTokenSource(kakaoCode);

    const validatedKakaoTokenData: KakaoTokenResDto = validateOrThrow(kakaoTokenResDtoSchema, kakaoTokenApiResponse);
    const kakaoToken: string = validatedKakaoTokenData.access_token;

    const kakaoAccountApiResponse: KakaoAccountResDto = await kakaoAccountSource(kakaoToken);

    const validatedData: KakaoAccountResDto = validateOrThrow(kakaoAccountResDtoSchema, kakaoAccountApiResponse);
    const kakaoEmail: string = validatedData.kakao_account.email;

    return NextResponse.json(success(kakaoEmail));
  } catch (e) {
    return NextResponse.json(failed(e));
  }
};
