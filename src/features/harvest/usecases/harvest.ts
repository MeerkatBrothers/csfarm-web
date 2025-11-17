import { validateOrThrow } from '@/lib/utils/zod';
import ResultError from '@/lib/errors/resultError';

import harvestRepository from '@/features/harvest/repositories/harvestRepository';
import {
  harvestRequestSchema,
  type HarvestRequest,
} from '@/features/harvest/models/request/harvestRequest';

const harvest = async (insightId: string): Promise<void> => {
  const body: HarvestRequest = { insightId };
  const validatedBody = validateOrThrow(harvestRequestSchema, body);

  const result = await harvestRepository(validatedBody);
  if (!result.ok) {
    throw new ResultError(result.statusCode, result.message);
  }
};

export default harvest;
