import authBffHttpClient from '@/lib/apis/clients/authBffHttpClient';
import { type Result } from '@/lib/types/result';
import { type Paginated } from '@/lib/models/paginated';

import { type HarvestedInsightResponse } from '@/features/harvest/models/response/harvestedInsightResponse';

const harvestedInsightsRepository = async (
  page: number,
  size: number,
): Promise<Result<Paginated<HarvestedInsightResponse>>> => {
  const endpoint = `/harvest/harvested?page=${page}&size=${size}`;

  const result = await authBffHttpClient<Paginated<HarvestedInsightResponse>>({
    method: 'GET',
    endpoint,
  });

  return result;
};

export default harvestedInsightsRepository;
