import { NextResponse } from "next/server";

import { Result, success, failed } from "@/lib/types/result";
import { validateOrThrow } from "@/lib/utils/zod";
import { getAccessTokenFromCookie } from "@/lib/cookie/accessToken";
import UnauthorizedError from "@/lib/errors/http/unauthorizedError";

import threshQuizSource from "@/domains/quiz/datasources/threshQuizSource";
import { ThreshQuizReqDto, threshQuizReqDtoSchema } from "@/domains/quiz/dtos/request/threshQuizReqDto";

export const POST = async (request: Request): Promise<NextResponse<Result<null>>> => {
  try {
    const requestBody: unknown = await request.json();
    const validatedRequestBody: ThreshQuizReqDto = validateOrThrow(threshQuizReqDtoSchema, requestBody);

    const storedAccessToken: string | null = await getAccessTokenFromCookie();
    if (!storedAccessToken) {
      throw new UnauthorizedError();
    }

    await threshQuizSource(validatedRequestBody, storedAccessToken);

    return NextResponse.json(success(null));
  } catch (e) {
    return NextResponse.json(failed(e));
  }
};
