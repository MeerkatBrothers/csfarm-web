import fetcher from '@/shared/apis/fetchers/fetcher';

import type { KakaoToken } from '@/features/auth/models/kakao-token';

const fetchKakaoToken = async (kakaoCode: string): Promise<KakaoToken> => {
  const origin = 'https://kauth.kakao.com';
  const endpoint = '/oauth/token';

  return await fetcher<KakaoToken>({
    origin,
    endpoint,
    method: 'POST',
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
  });
};

export default fetchKakaoToken;
