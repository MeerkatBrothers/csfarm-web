import bffFetcher from '@/shared/apis/fetchers/bff-fetcher';
import type { Result } from '@/shared/types/result';

const harvest = async (insightId: string): Promise<Result<null>> => {
  const endpoint = `/harvest/${insightId}`;

  return await bffFetcher<null>({
    endpoint,
    method: 'POST',
  });
};

export default harvest;
