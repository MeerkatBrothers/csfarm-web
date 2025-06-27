import { NextResponse } from "next/server";

import { Result, success, failed } from "@/lib/types/result";
import { validateOrThrow } from "@/lib/utils/zod";
import { getAccessTokenFromCookie } from "@/lib/cookie/accessToken";
import UnauthorizedError from "@/lib/errors/http/unauthorizedError";

import harvestInsightSource from "@/domains/insight/datasources/harvestInsightSource";
import { HarvestInsightReqDto, harvestInsightReqDtoSchema } from "@/domains/insight/dtos/request/harvestInsightReqDto";

export const POST = async (request: Request): Promise<NextResponse<Result<null>>> => {
  try {
    const requestBody: unknown = await request.json();
    const validatedRequestBody: HarvestInsightReqDto = validateOrThrow(harvestInsightReqDtoSchema, requestBody);

    const storedAccessToken: string | null = await getAccessTokenFromCookie();
    if (!storedAccessToken) {
      throw new UnauthorizedError();
    }

    await harvestInsightSource(validatedRequestBody, storedAccessToken);

    return NextResponse.json(success(null));
  } catch (e) {
    return NextResponse.json(failed(e));
  }
};
