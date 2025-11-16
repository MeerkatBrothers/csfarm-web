import httpClient from '@/lib/apis/clients/httpClient';

import { KAKAO_ACCOUNT_URL } from '@/features/auth/constants/url';
import {
  KAKAO_LOGIN_ERROR,
  KAKAO_USER_NOT_FOUND_ERROR,
} from '@/features/auth/constants/errorMessage';
import { type KakaoAccountResponse } from '@/features/auth/models/response/kakaoAccountResponse';

const kakaoAccountDatasource = async (kakaoToken: string): Promise<KakaoAccountResponse> => {
  const response = await httpClient<KakaoAccountResponse>({
    method: 'GET',
    endpoint: KAKAO_ACCOUNT_URL,
    options: {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
        Authorization: `Bearer ${kakaoToken}`,
      },
    },
    errorMessages: {
      400: KAKAO_LOGIN_ERROR,
      401: KAKAO_USER_NOT_FOUND_ERROR,
    },
  });

  return response;
};

export default kakaoAccountDatasource;
