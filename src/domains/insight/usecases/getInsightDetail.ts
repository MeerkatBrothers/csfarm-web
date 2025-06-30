import { Result } from "@/lib/types/result";
import { validateOrThrow } from "@/lib/utils/zod";
import ResultError from "@/lib/errors/resultError";

import insightDetailRepo from "@/domains/insight/repositories/insightDetailRepo";
import { mapInsightDetailDtoToModel } from "@/domains/insight/mappers/insightDetailMapper";
import { InsightDetail, insightDetailSchema } from "@/domains/insight/models/insightDetail";
import { InsightDetailResDto } from "@/domains/insight/dtos/response/insightDetailResDto";

const getInsightDetail = async (insightId: number): Promise<InsightDetail> => {
  const result: Result<InsightDetailResDto> = await insightDetailRepo(insightId);
  if (!result.ok) {
    throw new ResultError(result.message, result.statusCode);
  }

  const insightDetail: InsightDetail = mapInsightDetailDtoToModel(result.data);

  const validatedInsightDetail: InsightDetail = validateOrThrow(insightDetailSchema, insightDetail);

  return validatedInsightDetail;
};

export default getInsightDetail;
