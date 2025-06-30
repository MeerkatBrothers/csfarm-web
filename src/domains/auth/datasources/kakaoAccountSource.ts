import externalFetcher from "@/lib/apis/fetchers/externalFetcher";

import { KAKAO_ACCOUNT_URL } from "@/domains/auth/constants/url";
import { KAKAO_LOGIN_ERROR, KAKAO_USER_NOT_FOUND_ERROR } from "@/domains/auth/constants/errorMessage";
import { KakaoAccountResDto } from "@/domains/auth/dtos/response/kakaoAccountResDto";

const kakaoAccountSource = async (kakaoToken: string): Promise<KakaoAccountResDto> => {
  const apiResponse: KakaoAccountResDto = await externalFetcher<KakaoAccountResDto>({
    url: KAKAO_ACCOUNT_URL,
    options: {
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
        Authorization: `Bearer ${kakaoToken}`,
      },
    },
    errorMessage: {
      400: KAKAO_LOGIN_ERROR,
      401: KAKAO_USER_NOT_FOUND_ERROR,
    },
  });

  return apiResponse;
};

export default kakaoAccountSource;
