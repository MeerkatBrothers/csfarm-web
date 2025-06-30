import { Result } from "@/lib/types/result";
import { validateOrThrow } from "@/lib/utils/zod";
import ResultError from "@/lib/errors/resultError";

import todayInsightRepo from "@/domains/insight/repositories/todayInsightRepo";
import { mapTodayInsightDtoToModel } from "@/domains/insight/mappers/todayInsightMapper";
import { TodayInsight, todayInsightSchema } from "@/domains/insight/models/todayInsight";
import { TodayInsightResDto } from "@/domains/insight/dtos/response/todayInsightResDto";

const getTodayInsight = async (): Promise<TodayInsight> => {
  const result: Result<TodayInsightResDto> = await todayInsightRepo();
  if (!result.ok) {
    throw new ResultError(result.message, result.statusCode);
  }

  const todayInsight: TodayInsight = mapTodayInsightDtoToModel(result.data);

  const validatedTodayInsight: TodayInsight = validateOrThrow(todayInsightSchema, todayInsight);

  return validatedTodayInsight;
};

export default getTodayInsight;
