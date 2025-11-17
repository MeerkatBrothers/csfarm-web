import ResultError from '@/lib/errors/resultError';

import harvestStatusRepository from '@/features/harvest/repositories/harvestStatusRepository';
import { type HarvestStatusResponse } from '@/features/harvest/models/response/harvestStatusResponse';

const getHarvestStatus = async (insightId: string): Promise<HarvestStatusResponse> => {
  const result = await harvestStatusRepository(insightId);
  if (!result.ok) {
    throw new ResultError(result.statusCode, result.message);
  }

  const harvestStatus = result.data;

  return harvestStatus;
};

export default getHarvestStatus;
