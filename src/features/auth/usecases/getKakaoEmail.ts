import ResultError from '@/lib/errors/resultError';

import kakaoEmailRepository from '@/features/auth/repositories/kakaoEmailRepository';

const getKakaoEmail = async (kakaoCode: string): Promise<string> => {
  const result = await kakaoEmailRepository(kakaoCode);
  if (!result.ok) {
    throw new ResultError(result.statusCode, result.message);
  }

  const kakaoEmail = result.data;

  return kakaoEmail;
};

export default getKakaoEmail;
