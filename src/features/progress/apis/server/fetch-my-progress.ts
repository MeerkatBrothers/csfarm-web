import apiFetcher from '@/shared/apis/fetchers/api-fetcher';

import type { Progress } from '@/features/progress/models/progress';

const fetchMyProgress = async (year: number, accessToken: string): Promise<Progress[]> => {
  const endpoint = `/progress/my/${year}`;

  return await apiFetcher<Progress[]>({
    endpoint,
    method: 'GET',
    token: accessToken,
  });
};

export default fetchMyProgress;
