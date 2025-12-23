import bffFetcher from '@/shared/apis/fetchers/bff-fetcher';
import type { Paginated } from '@/shared/models/paginated';
import type { Result } from '@/shared/types/result';

import type { HarvestedInsight } from '@/features/harvest/models/harvested-insight';

const getHarvestedInsights = async (
  page: number,
  size: number = 10,
): Promise<Result<Paginated<HarvestedInsight>>> => {
  const endpoint = `/harvest/harvested?page=${page}&size=${size}`;

  return await bffFetcher<Paginated<HarvestedInsight>>({
    endpoint,
    method: 'GET',
  });
};

export default getHarvestedInsights;
