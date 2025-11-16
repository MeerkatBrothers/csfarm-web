import bffHttpClient from '@/lib/apis/clients/bffHttpClient';
import { type Result } from '@/lib/types/result';

const kakaoEmailRepository = async (kakaoCode: string): Promise<Result<string>> => {
  const endpoint = `/auth/kakao/email?code=${kakaoCode}`;

  const result = await bffHttpClient<string>({
    method: 'GET',
    endpoint,
  });

  return result;
};

export default kakaoEmailRepository;
