import apiFetcher from '@/shared/apis/fetchers/api-fetcher';

import type { ThreshStatus } from '@/features/thresh/models/thresh-status';

const fetchThreshStatus = async (quizId: string, accessToken: string): Promise<ThreshStatus> => {
  const endpoint = `/thresh/status/${quizId}`;

  return await apiFetcher<ThreshStatus>({
    endpoint,
    method: 'GET',
    token: accessToken,
  });
};

export default fetchThreshStatus;
