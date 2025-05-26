import { NextResponse } from "next/server";

import { Result, success, failed } from "@/lib/types/result";
import { validateOrThrow } from "@/lib/utils/zod";
import ApiResponse from "@/lib/models/apiResponse";
import { getAccessTokenFromCookie } from "@/lib/cookie/accessToken";
import UnauthorizedError from "@/lib/errors/http/unauthorizedError";

import myProfileSource from "@/domains/profile/datasources/myProfileSource";
import { MyProfileResDto, myProfileResDtoSchema } from "@/domains/profile/dtos/response/myProfileResDto";

export const GET = async (): Promise<NextResponse<Result<MyProfileResDto>>> => {
  try {
    const storedAccessToken: string | null = await getAccessTokenFromCookie();
    if (!storedAccessToken) {
      throw new UnauthorizedError();
    }

    const apiResponse: ApiResponse<MyProfileResDto> = await myProfileSource(storedAccessToken);

    const data: MyProfileResDto = apiResponse.data;
    const validatedData: MyProfileResDto = validateOrThrow(myProfileResDtoSchema, data);

    return NextResponse.json(success(validatedData));
  } catch (e) {
    return NextResponse.json(failed(e));
  }
};
