import { NextResponse } from "next/server";

import { Result, success, failed } from "@/lib/types/result";
import { validateOrThrow } from "@/lib/utils/zod";
import ApiResponse from "@/lib/models/apiResponse";
import { setAccessTokenToCookie } from "@/lib/cookie/accessToken";
import { setRefreshTokenToCookie, getRefreshTokenFromCookie } from "@/lib/cookie/refreshToken";
import UnauthorizedError from "@/lib/errors/http/unauthorizedError";

import reissueTokenSource from "@/domains/auth/datasources/reissueTokenSource";
import { ReissueTokenResDto, reissueTokenResDtoSchema } from "@/domains/auth/dtos/response/reissueTokenResDto";

export const POST = async (): Promise<NextResponse<Result<null>>> => {
  try {
    const storedRefreshToken: string | null = await getRefreshTokenFromCookie();
    if (!storedRefreshToken) {
      throw new UnauthorizedError();
    }

    const apiResponse: ApiResponse<ReissueTokenResDto> = await reissueTokenSource(storedRefreshToken);

    const data: ReissueTokenResDto = apiResponse.data;
    const validatedData: ReissueTokenResDto = validateOrThrow(reissueTokenResDtoSchema, data);
    const { accessToken, refreshToken } = validatedData.token;

    const response: NextResponse<Result<null>> = NextResponse.json(success(null));

    setAccessTokenToCookie(response, accessToken);
    setRefreshTokenToCookie(response, refreshToken);

    return response;
  } catch (e) {
    return NextResponse.json(failed(e));
  }
};
