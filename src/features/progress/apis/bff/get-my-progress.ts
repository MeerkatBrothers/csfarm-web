import bffFetcher from '@/shared/apis/fetchers/bff-fetcher';
import type { Result } from '@/shared/types/result';

import type { Progress } from '@/features/progress/models/progress';

const getMyProgress = async (year: number): Promise<Result<Progress[]>> => {
  const endpoint = `/progress/my/${year}`;

  return await bffFetcher<Progress[]>({
    endpoint,
    method: 'GET',
  });
};

export default getMyProgress;
