import { NextResponse } from "next/server";

import { Result, success, failed } from "@/lib/types/result";
import { validateOrThrow } from "@/lib/utils/zod";
import { parsePathParam } from "@/lib/utils/parser/api";
import { stringToNumber } from "@/lib/utils/transformer/number";
import ApiResponse from "@/lib/models/apiResponse";
import { getAccessTokenFromCookie } from "@/lib/cookie/accessToken";
import NotFoundError from "@/lib/errors/http/notFoundError";

import insightStatusSource from "@/domains/insight/datasources/insightStatusSource";
import { InsightStatusResDto, insightStatusResDtoSchema } from "@/domains/insight/dtos/response/insightStatusResDto";

interface Params {
  params: Promise<{ insightId: string | undefined }>;
}

export const GET = async (_: Request, context: Params): Promise<NextResponse<Result<InsightStatusResDto>>> => {
  try {
    const params: { insightId: string | undefined } = await context.params;
    const insightId: number | null = stringToNumber(parsePathParam(params, "insightId"));
    if (insightId === null) {
      throw new NotFoundError("수확물을 찾을 수 없어요.");
    }

    const storedAccessToken: string | null = await getAccessTokenFromCookie();
    if (!storedAccessToken) {
      return NextResponse.json(success({ insightId, isHarvested: false }));
    }

    const apiResponse: ApiResponse<InsightStatusResDto> = await insightStatusSource(insightId, storedAccessToken);

    const data: InsightStatusResDto = apiResponse.data;
    const validatedData: InsightStatusResDto = validateOrThrow(insightStatusResDtoSchema, data);

    return NextResponse.json(success(validatedData));
  } catch (e) {
    return NextResponse.json(failed(e));
  }
};
