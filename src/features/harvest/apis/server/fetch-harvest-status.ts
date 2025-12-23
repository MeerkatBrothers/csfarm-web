import apiFetcher from '@/shared/apis/fetchers/api-fetcher';

import type { HarvestStatus } from '@/features/harvest/models/harvest-status';

const fetchHarvestStatus = async (
  insightId: string,
  accessToken: string,
): Promise<HarvestStatus> => {
  const endpoint = `/harvest/status/${insightId}`;

  return await apiFetcher<HarvestStatus>({
    endpoint,
    method: 'GET',
    token: accessToken,
  });
};

export default fetchHarvestStatus;
