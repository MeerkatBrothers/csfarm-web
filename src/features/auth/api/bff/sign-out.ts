import bffFetcher from '@/shared/apis/fetchers/bff-fetcher';
import type { Result } from '@/shared/types/result';

const signOut = async (): Promise<Result<null>> => {
  const endpoint = '/auth/sign-out';

  return await bffFetcher<null>({
    endpoint,
    method: 'DELETE',
  });
};

export default signOut;
