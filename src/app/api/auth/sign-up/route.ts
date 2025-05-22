import { NextResponse } from "next/server";

import { Result, success, failed } from "@/lib/types/result";
import { validateOrThrow } from "@/lib/utils/zod";
import ApiResponse from "@/lib/models/apiResponse";
import { setAccessTokenToCookie } from "@/lib/cookie/accessToken";
import { setRefreshTokenToCookie } from "@/lib/cookie/refreshToken";

import signUpSource from "@/domains/auth/datasources/signUpSource";
import { SignUpReqDto, signUpReqDtoSchema } from "@/domains/auth/dtos/request/signUpReqDto";
import { SignUpResDto, signUpResDtoSchema } from "@/domains/auth/dtos/response/signUpResDto";

export const POST = async (request: Request): Promise<NextResponse<Result<null>>> => {
  try {
    const requestBody: unknown = await request.json();
    const validatedRequestBody: SignUpReqDto = validateOrThrow(signUpReqDtoSchema, requestBody);

    const apiResponse: ApiResponse<SignUpResDto> = await signUpSource(validatedRequestBody);

    const data: SignUpResDto = apiResponse.data;
    const validatedData: SignUpResDto = validateOrThrow(signUpResDtoSchema, data);
    const { accessToken, refreshToken } = validatedData.token;

    const response: NextResponse<Result<null>> = NextResponse.json(success(null));

    setAccessTokenToCookie(response, accessToken);
    setRefreshTokenToCookie(response, refreshToken);

    return response;
  } catch (e) {
    return NextResponse.json(failed(e));
  }
};
