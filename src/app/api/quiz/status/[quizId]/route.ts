import { NextResponse } from "next/server";

import { Result, success, failed } from "@/lib/types/result";
import { validateOrThrow } from "@/lib/utils/zod";
import { parsePathParam } from "@/lib/utils/parser/api";
import { stringToNumber } from "@/lib/utils/transformer/number";
import ApiResponse from "@/lib/models/apiResponse";
import { getAccessTokenFromCookie } from "@/lib/cookie/accessToken";
import NotFoundError from "@/lib/errors/http/notFoundError";

import quizStatusSource from "@/domains/quiz/datasources/quizStatusSource";
import { QuizStatusResDto, quizStatusResDtoSchema } from "@/domains/quiz/dtos/response/quizStatusResDto";

interface Params {
  params: Promise<{ quizId: string | undefined }>;
}

export const GET = async (_: Request, context: Params): Promise<NextResponse<Result<QuizStatusResDto>>> => {
  try {
    const params: { quizId: string | undefined } = await context.params;
    const quizId: number | null = stringToNumber(parsePathParam(params, "quizId"));
    if (quizId === null) {
      throw new NotFoundError("타작물을 찾을 수 없어요.");
    }

    const storedAccessToken: string | null = await getAccessTokenFromCookie();
    if (!storedAccessToken) {
      return NextResponse.json(success({ quizId, isThreshed: false }));
    }

    const apiResponse: ApiResponse<QuizStatusResDto> = await quizStatusSource(quizId, storedAccessToken);

    const data: QuizStatusResDto = apiResponse.data;
    const validatedData: QuizStatusResDto = validateOrThrow(quizStatusResDtoSchema, data);

    return NextResponse.json(success(validatedData));
  } catch (e) {
    return NextResponse.json(failed(e));
  }
};
