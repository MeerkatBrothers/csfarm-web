import apiFetcher from '@/shared/apis/fetchers/api-fetcher';

import type { Token } from '@/features/auth/models/token';

const fetchReissueToken = async (refreshToken: string): Promise<Token> => {
  const endpoint = '/auth/reissue-token';

  return await apiFetcher<Token>({
    endpoint,
    method: 'POST',
    token: refreshToken,
  });
};

export default fetchReissueToken;
