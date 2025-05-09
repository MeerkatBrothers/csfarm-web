import { validateOrThrow } from "@/lib/utils/zod";
import ApiResponse from "@/lib/models/apiResponse";

import storagedInsightApi from "@/domains/insight/datasources/storagedInsightApi";
import { mapStoragedInsightDtoToModel } from "@/domains/insight/mappers/storagedInsightMapper";
import { StoragedInsight } from "@/domains/insight/models/storagedInsight";
import { StoragedInsightResDto, storagedInsightResDtoSchema } from "@/domains/insight/dtos/response/storagedInsightResDto";

const fetchStoragedInsight = async (): Promise<StoragedInsight> => {
  const apiResponse: ApiResponse<StoragedInsightResDto> = await storagedInsightApi();
  const data: StoragedInsightResDto = apiResponse.data;

  const validatedData: StoragedInsightResDto = validateOrThrow(storagedInsightResDtoSchema, data);

  const storedInsight: StoragedInsight = mapStoragedInsightDtoToModel(validatedData);

  return storedInsight;
};

export default fetchStoragedInsight;
