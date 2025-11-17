import ResultError from '@/lib/errors/resultError';
import { type Paginated } from '@/lib/models/paginated';

import harvestedInsightsRepository from '@/features/harvest/repositories/harvestedInsightsRepository';
import { type HarvestedInsightResponse } from '@/features/harvest/models/response/harvestedInsightResponse';

const getHarvestedInsights = async (
  page: number,
  size: number,
): Promise<Paginated<HarvestedInsightResponse>> => {
  const result = await harvestedInsightsRepository(page, size);
  if (!result.ok) {
    throw new ResultError(result.statusCode, result.message);
  }

  const paginatedHarvestedInsights = result.data;

  return paginatedHarvestedInsights;
};

export default getHarvestedInsights;
