import fetcher from "@/lib/apis/fetcher";

import { KAKAO_TOKEN_URL } from "@/domains/auth/constants/url";
import { KakaoTokenResDto } from "@/domains/auth/dtos/response/kakaoTokenResDto";

const kakaoTokenApi = async (code: string): Promise<KakaoTokenResDto> => {
  const apiResponse: KakaoTokenResDto = await fetcher<KakaoTokenResDto>({
    config: {
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
          code,
        }),
      },
    },
    errorMessage: {
      400: "카카오 로그인 중 오류가 발생했어요. 잠시 후 다시 시도해 주세요.",
      401: "카카오 사용자 정보를 불러오는데 실패했어요. 잠시 후 다시 시도해 주세요.",
    },
  });

  return apiResponse;
};

export default kakaoTokenApi;
