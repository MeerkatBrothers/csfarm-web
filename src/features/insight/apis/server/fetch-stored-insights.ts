import apiFetcher from '@/shared/apis/fetchers/api-fetcher';
import type { Paginated } from '@/shared/models/paginated';

import type { InsightPreview } from '@/features/insight/models/insight.preview';

const fetchStoredInsights = async (
  page: number,
  size: number,
): Promise<Paginated<InsightPreview>> => {
  const endpoint = `/insight/storage?page=${page}&size=${size}`;

  return await apiFetcher<Paginated<InsightPreview>>({
    endpoint,
    method: 'GET',
  });
};

export default fetchStoredInsights;
