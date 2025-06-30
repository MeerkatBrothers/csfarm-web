import { NextResponse } from "next/server";

import { Result, success, failed } from "@/lib/types/result";
import { validateOrThrow } from "@/lib/utils/zod";
import ApiResponse from "@/lib/models/apiResponse";

import todayInsightSource from "@/domains/insight/datasources/todayInsightSource";
import { TodayInsightResDto, todayInsightResDtoSchema } from "@/domains/insight/dtos/response/todayInsightResDto";

export const GET = async (): Promise<NextResponse<Result<TodayInsightResDto>>> => {
  try {
    const apiResponse: ApiResponse<TodayInsightResDto> = await todayInsightSource();

    const data: TodayInsightResDto = apiResponse.data;
    const validatedData: TodayInsightResDto = validateOrThrow(todayInsightResDtoSchema, data);

    return NextResponse.json(success(validatedData));
  } catch (e) {
    return NextResponse.json(failed(e));
  }
};
