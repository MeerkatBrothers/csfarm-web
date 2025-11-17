import ResultError from '@/lib/errors/resultError';
import { type Paginated } from '@/lib/models/paginated';

import storedInsightsRepository from '@/features/insight/repositories/storedInsightsRepository';
import { type StoredInsightResponse } from '@/features/insight/models/response/storedInsightResponse';

const getStoredInsights = async (
  page: number,
  size: number,
): Promise<Paginated<StoredInsightResponse>> => {
  const result = await storedInsightsRepository(page, size);
  if (!result.ok) {
    throw new ResultError(result.statusCode, result.message);
  }

  const paginatedStoredInsight = result.data;

  return paginatedStoredInsight;
};

export default getStoredInsights;
