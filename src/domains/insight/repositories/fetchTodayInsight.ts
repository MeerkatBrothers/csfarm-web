import { validateOrThrow } from "@/lib/utils/zod";
import ApiResponse from "@/lib/models/apiResponse";

import todayInsightApi from "@/domains/insight/datasources/todayInsightApi";
import { mapTodayInsightDtoToModel } from "@/domains/insight/mappers/todayInsightMapper";
import { TodayInsight } from "@/domains/insight/models/todayInsight";
import { TodayInsightResDto, todayInsightResDtoSchema } from "@/domains/insight/dtos/response/todayInsightResDto";

const fetchTodayInsight = async (accessToken: string | null): Promise<TodayInsight> => {
  const apiResponse: ApiResponse<TodayInsightResDto> = await todayInsightApi(accessToken);
  const data: TodayInsightResDto = apiResponse.data;

  const validatedData: TodayInsightResDto = validateOrThrow(todayInsightResDtoSchema, data);

  const todayInsight: TodayInsight = mapTodayInsightDtoToModel(validatedData);

  return todayInsight;
};

export default fetchTodayInsight;
