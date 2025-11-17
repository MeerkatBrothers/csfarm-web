import ResultError from '@/lib/errors/resultError';

import insightDetailRepository from '@/features/insight/repositories/insightDetailRepository';
import { type InsightDetailResponse } from '@/features/insight/models/response/insightDetailResponse';

const getInsightDetail = async (insightId: string): Promise<InsightDetailResponse> => {
  const result = await insightDetailRepository(insightId);
  if (!result.ok) {
    throw new ResultError(result.statusCode, result.message);
  }

  const insightDetail = result.data;

  return insightDetail;
};

export default getInsightDetail;
