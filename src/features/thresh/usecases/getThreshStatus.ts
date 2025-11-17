import ResultError from '@/lib/errors/resultError';

import threshStatusRepository from '@/features/thresh/repositories/threshStatusRepository';
import { type ThreshStatusResponse } from '@/features/thresh/models/response/threshStatusResponse';

const getThreshStatus = async (quizId: string): Promise<ThreshStatusResponse> => {
  const result = await threshStatusRepository(quizId);
  if (!result.ok) {
    throw new ResultError(result.statusCode, result.message);
  }

  const threshStatus = result.data;

  return threshStatus;
};

export default getThreshStatus;
