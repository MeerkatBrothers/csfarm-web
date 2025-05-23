import { NextResponse } from "next/server";

import { Result, success, failed } from "@/lib/types/result";
import { validateOrThrow } from "@/lib/utils/zod";
import ApiResponse from "@/lib/models/apiResponse";
import { getAccessTokenFromCookie } from "@/lib/cookie/accessToken";
import UnauthorizedError from "@/lib/errors/http/unauthorizedError";

import todayQuizSource from "@/domains/quiz/datasources/todayQuizSource";
import { TodayQuizResDto, todayQuizResDtoSchema } from "@/domains/quiz/dtos/response/todayQuizResDto";

export const GET = async (): Promise<NextResponse<Result<TodayQuizResDto>>> => {
  try {
    const storedAccessToken: string | null = await getAccessTokenFromCookie();
    if (!storedAccessToken) {
      throw new UnauthorizedError();
    }

    const apiResponse: ApiResponse<TodayQuizResDto> = await todayQuizSource(storedAccessToken);

    const data: TodayQuizResDto = apiResponse.data;
    const validatedData: TodayQuizResDto = validateOrThrow(todayQuizResDtoSchema, data);

    return NextResponse.json(success(validatedData));
  } catch (e) {
    return NextResponse.json(failed(e));
  }
};
