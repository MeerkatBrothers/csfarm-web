import { validateOrThrow } from "@/lib/utils/zod";
import ApiResponse from "@/lib/models/apiResponse";

import storedInsightApi from "@/domains/insight/datasources/storedInsightApi";
import { mapStoredInsightDtoToModel } from "@/domains/insight/mappers/storedInsightMapper";
import { StoredInsight } from "@/domains/insight/models/storedInsight";
import { StoredInsightResDto, storedInsightResDtoSchema } from "@/domains/insight/dtos/response/storedInsightResDto";

const fetchStoredInsight = async (): Promise<StoredInsight> => {
  const apiResponse: ApiResponse<StoredInsightResDto> = await storedInsightApi();
  const data: StoredInsightResDto = apiResponse.data;

  const validatedData: StoredInsightResDto = validateOrThrow(storedInsightResDtoSchema, data);

  const storedInsight: StoredInsight = mapStoredInsightDtoToModel(validatedData);

  return storedInsight;
};

export default fetchStoredInsight;
