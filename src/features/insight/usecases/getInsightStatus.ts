import { Result } from '@/lib/types/result';
import { validateOrThrow } from '@/lib/utils/zod';
import ResultError from '@/lib/errors/resultError';

import insightStatusRepo from '@/features/insight/repositories/insightStatusRepo';
import { mapInsightStatusDtoToModel } from '@/features/insight/mappers/insightStatusMapper';
import { InsightStatus, insightStatusSchema } from '@/features/insight/models/insightStatus';
import { InsightStatusResDto } from '@/features/insight/dtos/response/insightStatusResDto';

const getInsightStatus = async (insightId: number): Promise<InsightStatus> => {
  const result: Result<InsightStatusResDto> = await insightStatusRepo(insightId);
  if (!result.ok) {
    throw new ResultError(result.message, result.statusCode);
  }

  const insightStatus: InsightStatus = mapInsightStatusDtoToModel(result.data);

  const validatedInsightStatus: InsightStatus = validateOrThrow(insightStatusSchema, insightStatus);

  return validatedInsightStatus;
};

export default getInsightStatus;
