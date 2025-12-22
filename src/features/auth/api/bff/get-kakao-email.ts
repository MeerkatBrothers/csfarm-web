import bffFetcher from '@/shared/apis/fetchers/bff-fetcher';
import type { Result } from '@/shared/types/result';

const getKakaoEmail = async (kakaoCode: string): Promise<Result<string>> => {
  const endpoint = `/auth/kakao/email?code=${kakaoCode}`;

  return await bffFetcher<string>({
    endpoint,
    method: 'GET',
  });
};

export default getKakaoEmail;
