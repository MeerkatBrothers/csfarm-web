import externalFetcher from "@/lib/apis/fetchers/externalFetcher";

import { KAKAO_ACCOUNT_URL } from "@/domains/auth/constants/url";
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
      400: "카카오 로그인 중 오류가 발생했어요. 잠시 후 다시 시도해 주세요.",
      401: "카카오 사용자 정보를 불러오는데 실패했어요. 잠시 후 다시 시도해 주세요.",
    },
  });

  return apiResponse;
};

export default kakaoAccountSource;
