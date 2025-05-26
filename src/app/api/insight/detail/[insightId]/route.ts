import { NextResponse } from "next/server";

import { Result, success, failed } from "@/lib/types/result";
import { validateOrThrow } from "@/lib/utils/zod";
import { parsePathParam } from "@/lib/utils/parser/api";
import { stringToNumber } from "@/lib/utils/transformer/number";
import ApiResponse from "@/lib/models/apiResponse";
import NotFoundError from "@/lib/errors/http/notFoundError";

import insightDetailSource from "@/domains/insight/datasources/insightDetailSource";
import { InsightDetailResDto, insightDetailResDtoSchema } from "@/domains/insight/dtos/response/insightDetailResDto";

interface Params {
  params: { insightId: string | undefined };
}

export const GET = async ({ params }: Params): Promise<NextResponse<Result<InsightDetailResDto>>> => {
  try {
    const insightId: number | null = stringToNumber(parsePathParam(params, "insightId"));
    if (insightId === null) {
      throw new NotFoundError("지식을 찾을 수 없어요.");
    }

    const apiResponse: ApiResponse<InsightDetailResDto> = await insightDetailSource(insightId);

    const data: InsightDetailResDto = apiResponse.data;
    const validatedData: InsightDetailResDto = validateOrThrow(insightDetailResDtoSchema, data);

    return NextResponse.json(success(validatedData));
  } catch (e) {
    return NextResponse.json(failed(e));
  }
};
