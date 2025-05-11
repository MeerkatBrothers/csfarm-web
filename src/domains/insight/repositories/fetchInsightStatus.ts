import { validateOrThrow } from "@/lib/utils/zod";
import ApiResponse from "@/lib/models/apiResponse";

import insightStatusApi from "@/domains/insight/datasources/insightStatusApi";
import { mapInsightStatusDtoToModel } from "@/domains/insight/mappers/insightStatusMapper";
import { InsightStatus } from "@/domains/insight/models/insightStatus";
import { InsightStatusResDto, insightStatusResDtoSchema } from "@/domains/insight/dtos/response/insightStatusResDto";

const fetchInsightStatus = async (insightId: number, accessToken: string | null): Promise<InsightStatus> => {
  const apiResponse: ApiResponse<InsightStatusResDto> = await insightStatusApi(insightId, accessToken);
  const data: InsightStatusResDto = apiResponse.data;

  const validatedData: InsightStatusResDto = validateOrThrow(insightStatusResDtoSchema, data);

  const insightStatus: InsightStatus = mapInsightStatusDtoToModel(validatedData);

  return insightStatus;
};

export default fetchInsightStatus;
