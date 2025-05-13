import { validateOrThrow } from "@/lib/utils/zod";
import ApiResponse from "@/lib/models/apiResponse";

import harvestedInsightApi from "@/domains/insight/datasources/harvestedInsightApi";
import { mapHarvestedInsightDtoToModel } from "@/domains/insight/mappers/harvestedInsightMapper";
import { HarvestedInsight } from "@/domains/insight/models/harvestedInsight";
import { HarvestedInsightResDto, harvestedInsightResDtoSchema } from "@/domains/insight/dtos/response/harvestedInsightResDto";

const fetchHarvestedInsight = async (page: number, size: number): Promise<HarvestedInsight> => {
  const apiResponse: ApiResponse<HarvestedInsightResDto> = await harvestedInsightApi(page, size);
  const data: HarvestedInsightResDto = apiResponse.data;

  const validatedData: HarvestedInsightResDto = validateOrThrow(harvestedInsightResDtoSchema, data);

  const harvestedInsight: HarvestedInsight = mapHarvestedInsightDtoToModel(validatedData);

  return harvestedInsight;
};

export default fetchHarvestedInsight;
