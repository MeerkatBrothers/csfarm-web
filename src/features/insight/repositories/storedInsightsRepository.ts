import bffHttpClient from '@/lib/apis/clients/bffHttpClient';
import { type Result } from '@/lib/types/result';
import { type Paginated } from '@/lib/models/paginated';

import { type StoredInsightResponse } from '@/features/insight/models/response/storedInsightResponse';

const storedInsightsRepository = async (
  page: number,
  size: number,
): Promise<Result<Paginated<StoredInsightResponse>>> => {
  const endpoint = `/insight/storage?page=${page}&size=${size}`;

  const result = await bffHttpClient<Paginated<StoredInsightResponse>>({
    method: 'GET',
    endpoint,
  });

  return result;
};

export default storedInsightsRepository;
