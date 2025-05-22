import { Result } from "@/lib/types/result";
import { validateOrThrow } from "@/lib/utils/zod";
import ResultError from "@/lib/errors/resultError";

import storedInsightRepo from "@/domains/insight/repositories/storedInsightRepo";
import { mapStoredInsightDtoToModel } from "@/domains/insight/mappers/storedInsightMapper";
import { StoredInsight, storedInsightSchema } from "@/domains/insight/models/storedInsight";
import { StoredInsightResDto } from "@/domains/insight/dtos/response/storedInsightResDto";

const getStoredInsight = async (): Promise<StoredInsight> => {
  const result: Result<StoredInsightResDto> = await storedInsightRepo();
  if (!result.ok) {
    throw new ResultError(result.message, result.statusCode);
  }

  const storedInsight: StoredInsight = mapStoredInsightDtoToModel(result.data);

  const validatedStoredInsight: StoredInsight = validateOrThrow(storedInsightSchema, storedInsight);

  return validatedStoredInsight;
};

export default getStoredInsight;
