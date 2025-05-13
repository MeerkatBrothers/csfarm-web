import { validateOrThrow } from "@/lib/utils/zod";

import harvestInsightApi from "@/domains/insight/datasources/harvestInsightApi";
import { HarvestInsightReqDto, harvestInsightReqDtoSchema } from "@/domains/insight/dtos/request/harvestInsightReqDto";

const fetchHarvestInsight = async (insightId: number): Promise<void> => {
  const requestBody: HarvestInsightReqDto = { insightId };

  const validatedBody: HarvestInsightReqDto = validateOrThrow(harvestInsightReqDtoSchema, requestBody);

  await harvestInsightApi(validatedBody);
};

export default fetchHarvestInsight;
