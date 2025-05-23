import { NextResponse } from "next/server";

import { Result, success, failed } from "@/lib/types/result";
import { validateOrThrow } from "@/lib/utils/zod";
import ApiResponse from "@/lib/models/apiResponse";
import { getAccessTokenFromCookie } from "@/lib/cookie/accessToken";
import UnauthorizedError from "@/lib/errors/http/unauthorizedError";

import myProgressSource from "@/domains/progress/datasources/myProgressSource";
import { MyProgressResDto, myProgressResDtoSchema } from "@/domains/progress/dtos/request/myProgressResDto";

export const GET = async (): Promise<NextResponse<Result<MyProgressResDto>>> => {
  try {
    const storedAccessToken: string | null = await getAccessTokenFromCookie();
    if (!storedAccessToken) {
      throw new UnauthorizedError();
    }

    const apiResponse: ApiResponse<MyProgressResDto> = await myProgressSource(storedAccessToken);

    const data: MyProgressResDto = apiResponse.data;
    const validatedData: MyProgressResDto = validateOrThrow(myProgressResDtoSchema, data);

    return NextResponse.json(success(validatedData));
  } catch (e) {
    return NextResponse.json(failed(e));
  }
};
