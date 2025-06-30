import { Result } from "@/lib/types/result";
import { validateOrThrow } from "@/lib/utils/zod";
import ResultError from "@/lib/errors/resultError";

import storedInsightRepo from "@/domains/insight/repositories/storedInsightRepo";
import { mapStoredInsightDtoToModel } from "@/domains/insight/mappers/storedInsightMapper";
import { StoredInsight, storedInsightSchema } from "@/domains/insight/models/storedInsight";
import { InsightPreview } from "@/domains/insight/models/fragments/insightPreview";
import { StoredInsightResDto } from "@/domains/insight/dtos/response/storedInsightResDto";

const getStoredInsight = async (): Promise<Map<number, InsightPreview[]>> => {
  const result: Result<StoredInsightResDto> = await storedInsightRepo();
  if (!result.ok) {
    throw new ResultError(result.message, result.statusCode);
  }

  const storedInsight: StoredInsight = mapStoredInsightDtoToModel(result.data);

  const validatedStoredInsight: StoredInsight = validateOrThrow(storedInsightSchema, storedInsight);

  const storedInsightMap: Map<number, InsightPreview[]> = new Map<number, InsightPreview[]>();
  for (const { weekOffset, insights } of validatedStoredInsight.weeklyInsights) {
    storedInsightMap.set(weekOffset, insights);
  }

  return storedInsightMap;
};

export default getStoredInsight;
