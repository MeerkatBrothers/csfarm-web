import httpClient from '@/lib/apis/clients/httpClient';

import { KAKAO_TOKEN_URL } from '@/features/auth/constants/url';
import {
  KAKAO_LOGIN_ERROR,
  KAKAO_USER_NOT_FOUND_ERROR,
} from '@/features/auth/constants/errorMessage';
import { type KakaoTokenResponse } from '@/features/auth/models/response/kakaoTokenResponse';

const kakaoTokenDatasource = async (kakaoCode: string): Promise<KakaoTokenResponse> => {
  const response = await httpClient<KakaoTokenResponse>({
    method: 'POST',
    endpoint: KAKAO_TOKEN_URL,
    options: {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
      },
      body: new URLSearchParams({
        grant_type: 'authorization_code',
        client_id: process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY ?? '',
        redirect_uri: process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI ?? '',
        code: kakaoCode,
      }),
    },
    errorMessages: {
      400: KAKAO_LOGIN_ERROR,
      401: KAKAO_USER_NOT_FOUND_ERROR,
    },
  });

  return response;
};

export default kakaoTokenDatasource;
