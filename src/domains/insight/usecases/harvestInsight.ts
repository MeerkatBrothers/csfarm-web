import { Result } from "@/lib/types/result";
import { validateOrThrow } from "@/lib/utils/zod";
import ResultError from "@/lib/errors/resultError";

import harvestInsightRepo from "@/domains/insight/repositories/harvestInsightRepo";
import { HarvestInsightReqDto, harvestInsightReqDtoSchema } from "@/domains/insight/dtos/request/harvestInsightReqDto";

const harvestInsight = async (insightId: number): Promise<void> => {
  const requestBody: HarvestInsightReqDto = { insightId };
  const validatedRequestBody: HarvestInsightReqDto = validateOrThrow(harvestInsightReqDtoSchema, requestBody);

  const result: Result<null> = await harvestInsightRepo(validatedRequestBody);
  if (!result.ok) {
    throw new ResultError(result.message, result.statusCode);
  }
};

export default harvestInsight;
