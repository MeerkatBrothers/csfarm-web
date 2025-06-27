import { Result } from "@/lib/types/result";
import { validateOrThrow } from "@/lib/utils/zod";
import ResultError from "@/lib/errors/resultError";

import { HARVESTED_INSIGHT_PAGE_SIZE } from "@/domains/insight/constants/constraint";
import harvestedInsightRepo from "@/domains/insight/repositories/harvestedInsightRepo";
import { mapHarvestedInsightDtoToModel } from "@/domains/insight/mappers/harvestedInsightMapper";
import { HarvestedInsight, harvestedInsightSchema } from "@/domains/insight/models/harvestedInsight";
import { HarvestedInsightResDto } from "@/domains/insight/dtos/response/harvestedInsightResDto";

const getHarvestedInsight = async (page: number, size: number = HARVESTED_INSIGHT_PAGE_SIZE): Promise<HarvestedInsight> => {
  const result: Result<HarvestedInsightResDto> = await harvestedInsightRepo(page, size);
  if (!result.ok) {
    throw new ResultError(result.message, result.statusCode);
  }

  const harvestedInsight: HarvestedInsight = mapHarvestedInsightDtoToModel(result.data);

  const validatedHarvestedInsight: HarvestedInsight = validateOrThrow(harvestedInsightSchema, harvestedInsight);

  return validatedHarvestedInsight;
};

export default getHarvestedInsight;
