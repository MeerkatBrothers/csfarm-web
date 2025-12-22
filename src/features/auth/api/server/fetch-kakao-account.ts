import fetcher from '@/shared/apis/fetchers/fetcher';

import type { KakaoAccount } from '@/features/auth/models/kakao-account';

const fetchKakaoAccount = async (kakaoToken: string): Promise<KakaoAccount> => {
  const origin = 'https://kapi.kakao.com';
  const endpoint = '/v2/user/me';

  return await fetcher<KakaoAccount>({
    origin,
    endpoint,
    method: 'GET',
    options: {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
        Authorization: `Bearer ${kakaoToken}`,
      },
    },
  });
};

export default fetchKakaoAccount;
