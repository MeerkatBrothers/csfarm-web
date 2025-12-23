import bffFetcher from '@/shared/apis/fetchers/bff-fetcher';
import type { Result } from '@/shared/types/result';

import type { ThreshStatus } from '@/features/thresh/models/thresh-status';

const getThreshStatus = async (quizId: string): Promise<Result<ThreshStatus>> => {
  const endpoint = `/thresh/status/${quizId}`;

  return await bffFetcher<ThreshStatus>({
    endpoint,
    method: 'GET',
  });
};

export default getThreshStatus;
