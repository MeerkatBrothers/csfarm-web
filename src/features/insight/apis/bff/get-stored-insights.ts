import bffFetcher from '@/shared/apis/fetchers/bff-fetcher';
import type { Paginated } from '@/shared/models/paginated';
import type { Result } from '@/shared/types/result';

import type { InsightPreview } from '@/features/insight/models/insight.preview';

const getStoredInsights = async (
  page: number,
  size: number = 10,
): Promise<Result<Paginated<InsightPreview>>> => {
  const endpoint = `/insight/storage?page=${page}&size=${size}`;

  return await bffFetcher<Paginated<InsightPreview>>({
    endpoint,
    method: 'GET',
  });
};

export default getStoredInsights;
