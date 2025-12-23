import bffFetcher from '@/shared/apis/fetchers/bff-fetcher';
import type { Result } from '@/shared/types/result';

import type { HarvestStatus } from '@/features/harvest/models/harvest-status';

const getHarvestStatus = async (insightId: string): Promise<Result<HarvestStatus>> => {
  const endpoint = `/harvest/status/${insightId}`;

  return await bffFetcher<HarvestStatus>({
    endpoint,
    method: 'GET',
  });
};

export default getHarvestStatus;
