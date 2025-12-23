import apiFetcher from '@/shared/apis/fetchers/api-fetcher';
import type { Paginated } from '@/shared/models/paginated';

import type { HarvestedInsight } from '@/features/harvest/models/harvested-insight';

const fetchHarvestedInsights = async (
  page: number,
  size: number,
  accessToken: string,
): Promise<Paginated<HarvestedInsight>> => {
  const endpoint = `/harvest/harvested?page=${page}&size=${size}`;

  return await apiFetcher<Paginated<HarvestedInsight>>({
    endpoint,
    method: 'GET',
    token: accessToken,
  });
};

export default fetchHarvestedInsights;
