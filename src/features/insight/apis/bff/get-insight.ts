import bffFetcher from '@/shared/apis/fetchers/bff-fetcher';
import { type Result } from '@/shared/types/result';

import type { Insight } from '@/features/insight/models/insight';

const getInsight = async (insightId: string): Promise<Result<Insight>> => {
  const endpoint = `/insight/detail/${insightId}`;

  return await bffFetcher<Insight>({
    endpoint,
    method: 'GET',
  });
};

export default getInsight;
