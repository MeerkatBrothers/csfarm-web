import ResultError from '@/lib/errors/resultError';

import todayInsightRepository from '@/features/insight/repositories/todayInsightRepository';
import { type TodayInsightResponse } from '@/features/insight/models/response/todayInsightResponse';

const getTodayInsight = async (): Promise<TodayInsightResponse> => {
  const result = await todayInsightRepository();
  if (!result.ok) {
    throw new ResultError(result.statusCode, result.message);
  }

  const todayInsight = result.data;

  return todayInsight;
};

export default getTodayInsight;
