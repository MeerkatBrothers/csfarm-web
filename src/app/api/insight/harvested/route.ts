import { NextResponse } from "next/server";

import { Result, success, failed } from "@/lib/types/result";
import { validateOrThrow } from "@/lib/utils/zod";
import { parseQueryParam } from "@/lib/utils/parser/api";
import { stringToNumber } from "@/lib/utils/transformer/number";
import ApiResponse from "@/lib/models/apiResponse";
import { getAccessTokenFromCookie } from "@/lib/cookie/accessToken";
import UnauthorizedError from "@/lib/errors/http/unauthorizedError";

import harvestedInsightSource from "@/domains/insight/datasources/harvestedInsightSource";
import { HarvestedInsightResDto, harvestedInsightResDtoSchema } from "@/domains/insight/dtos/response/harvestedInsightResDto";

export const GET = async (request: Request): Promise<NextResponse<Result<HarvestedInsightResDto>>> => {
  try {
    const url: URL = new URL(request.url);
    const page: number = stringToNumber(parseQueryParam(url, "page")) ?? 1;
    const size: number = stringToNumber(parseQueryParam(url, "size")) ?? 10;

    const storedAccessToken: string | null = await getAccessTokenFromCookie();
    if (!storedAccessToken) {
      throw new UnauthorizedError();
    }

    const apiResponse: ApiResponse<HarvestedInsightResDto> = await harvestedInsightSource(page, size, storedAccessToken);

    const data: HarvestedInsightResDto = apiResponse.data;
    const validatedData: HarvestedInsightResDto = validateOrThrow(harvestedInsightResDtoSchema, data);

    return NextResponse.json(success(validatedData));
  } catch (e) {
    return NextResponse.json(failed(e));
  }
};
