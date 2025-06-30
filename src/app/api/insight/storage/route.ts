import { NextResponse } from "next/server";

import { Result, success, failed } from "@/lib/types/result";
import { validateOrThrow } from "@/lib/utils/zod";
import ApiResponse from "@/lib/models/apiResponse";

import storedInsightSource from "@/domains/insight/datasources/storedInsightSource";
import { StoredInsightResDto, storedInsightResDtoSchema } from "@/domains/insight/dtos/response/storedInsightResDto";

export const GET = async (): Promise<NextResponse<Result<StoredInsightResDto>>> => {
  try {
    const apiResponse: ApiResponse<StoredInsightResDto> = await storedInsightSource();

    const data: StoredInsightResDto = apiResponse.data;
    const validatedData: StoredInsightResDto = validateOrThrow(storedInsightResDtoSchema, data);

    return NextResponse.json(success(validatedData));
  } catch (e) {
    return NextResponse.json(failed(e));
  }
};
