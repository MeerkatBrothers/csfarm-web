import bffFetcher from '@/shared/apis/fetchers/bff-fetcher';
import type { Result } from '@/shared/types/result';

const withdraw = async (): Promise<Result<null>> => {
  const endpoint = '/auth/withdraw';

  return await bffFetcher<null>({
    endpoint,
    method: 'DELETE',
  });
};

export default withdraw;
