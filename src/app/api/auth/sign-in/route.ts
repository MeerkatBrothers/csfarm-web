import { NextResponse } from "next/server";

import { Result, success, failed } from "@/lib/types/result";
import { validateOrThrow } from "@/lib/utils/zod";
import ApiResponse from "@/lib/models/apiResponse";
import { setAccessTokenToCookie } from "@/lib/cookie/accessToken";
import { setRefreshTokenToCookie } from "@/lib/cookie/refreshToken";

import signInSource from "@/domains/auth/datasources/signInSource";
import { SignInReqDto, signInReqDtoSchema } from "@/domains/auth/dtos/request/signInReqDto";
import { SignInResDto, signInResDtoSchema } from "@/domains/auth/dtos/response/signInResDto";

export const POST = async (request: Request): Promise<NextResponse<Result<null>>> => {
  try {
    const requestBody: unknown = await request.json();
    const validatedRequestBody: SignInReqDto = validateOrThrow(signInReqDtoSchema, requestBody);

    const apiResponse: ApiResponse<SignInResDto> = await signInSource(validatedRequestBody);

    const data: SignInResDto = apiResponse.data;
    const validatedData: SignInResDto = validateOrThrow(signInResDtoSchema, data);
    const { accessToken, refreshToken } = validatedData.token;

    const response: NextResponse<Result<null>> = NextResponse.json(success(null));

    setAccessTokenToCookie(response, accessToken);
    setRefreshTokenToCookie(response, refreshToken);

    return response;
  } catch (e) {
    return NextResponse.json(failed(e));
  }
};
