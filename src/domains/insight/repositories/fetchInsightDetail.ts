import { validateOrThrow } from "@/lib/utils/zod";
import ApiResponse from "@/lib/models/apiResponse";

import insightDetailApi from "@/domains/insight/datasources/insightDetailApi";
import { mapInsightDetailDtoToModel } from "@/domains/insight/mappers/insightDetailMapper";
import { InsightDetail } from "@/domains/insight/models/insightDetail";
import { InsightDetailResDto, insightDetailResDtoSchema } from "@/domains/insight/dtos/response/insightDetailResDto";

const fetchInsightDetail = async (insightId: number): Promise<InsightDetail> => {
  const apiResponse: ApiResponse<InsightDetailResDto> = await insightDetailApi(insightId);
  const data: InsightDetailResDto = apiResponse.data;

  const validatedData: InsightDetailResDto = validateOrThrow(insightDetailResDtoSchema, data);

  const insightDetail: InsightDetail = mapInsightDetailDtoToModel(validatedData);

  return insightDetail;
};

export default fetchInsightDetail;
