import externalFetcher from "@/lib/apis/fetchers/externalFetcher";

import { KAKAO_TOKEN_URL } from "@/domains/auth/constants/url";
import { KAKAO_LOGIN_ERROR, KAKAO_USER_NOT_FOUND_ERROR } from "@/domains/auth/constants/errorMessage";
import { KakaoTokenResDto } from "@/domains/auth/dtos/response/kakaoTokenResDto";

const kakaoTokenSource = async (kakaoCode: string): Promise<KakaoTokenResDto> => {
  const apiResponse: KakaoTokenResDto = await externalFetcher<KakaoTokenResDto>({
    url: KAKAO_TOKEN_URL,
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
      },
      body: new URLSearchParams({
        grant_type: "authorization_code",
        client_id: process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY ?? "",
        redirect_uri: process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI ?? "",
        code: kakaoCode,
      }),
    },
    errorMessage: {
      400: KAKAO_LOGIN_ERROR,
      401: KAKAO_USER_NOT_FOUND_ERROR,
    },
  });

  return apiResponse;
};

export default kakaoTokenSource;
