import bffFetcher from '@/shared/apis/fetchers/bff-fetcher';
import type { Result } from '@/shared/types/result';

const reissueToken = async (): Promise<Result<null>> => {
  const endpoint = '/auth/reissue-token';

  return await bffFetcher<null>({
    endpoint,
    method: 'POST',
  });
};

export default reissueToken;
