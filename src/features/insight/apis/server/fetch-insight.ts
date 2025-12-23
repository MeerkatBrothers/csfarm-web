import apiFetcher from '@/shared/apis/fetchers/api-fetcher';

import type { Insight } from '@/features/insight/models/insight';

const fetchInsight = async (insightId: string): Promise<Insight> => {
  const endpoint = `/insight/detail/${insightId}`;

  return await apiFetcher<Insight>({
    endpoint,
    method: 'GET',
  });
};

export default fetchInsight;
