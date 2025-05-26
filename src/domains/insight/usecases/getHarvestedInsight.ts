import { Result } from "@/lib/types/result";
import { validateOrThrow } from "@/lib/utils/zod";
import ResultError from "@/lib/errors/resultError";

import harvestedInsightRepo from "@/domains/insight/repositories/harvestedInsightRepo";
import { mapHarvestedInsightDtoToModel } from "@/domains/insight/mappers/harvestedInsightMapper";
import { HarvestedInsight, harvestedInsightSchema } from "@/domains/insight/models/harvestedInsight";
import { HarvestedInsightResDto } from "@/domains/insight/dtos/response/harvestedInsightResDto";

const getHarvestedInsight = async (page: number, size: number = 10): Promise<HarvestedInsight> => {
  const result: Result<HarvestedInsightResDto> = await harvestedInsightRepo(page, size);
  if (!result.ok) {
    throw new ResultError(result.message, result.statusCode);
  }

  const harvestedInsight: HarvestedInsight = mapHarvestedInsightDtoToModel(result.data);

  const validatedHarvestedInsight: HarvestedInsight = validateOrThrow(harvestedInsightSchema, harvestedInsight);

  return validatedHarvestedInsight;
};

export default getHarvestedInsight;
