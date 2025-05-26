import { NextResponse } from "next/server";

import { Result, success, failed } from "@/lib/types/result";
import { validateOrThrow } from "@/lib/utils/zod";
import { getAccessTokenFromCookie } from "@/lib/cookie/accessToken";
import UnauthorizedError from "@/lib/errors/http/unauthorizedError";

import modifyProfileSource from "@/domains/profile/datasources/modifyProfileSource";
import { ModifyProfileReqDto, modifyProfileReqDtoSchema } from "@/domains/profile/dtos/request/modifyProfileReqDto";

export const PATCH = async (request: Request): Promise<NextResponse<Result<null>>> => {
  try {
    const requestBody: unknown = await request.json();
    const validatedRequestBody: ModifyProfileReqDto = validateOrThrow(modifyProfileReqDtoSchema, requestBody);

    const storedAccessToken: string | null = await getAccessTokenFromCookie();
    if (!storedAccessToken) {
      throw new UnauthorizedError();
    }

    await modifyProfileSource(validatedRequestBody, storedAccessToken);

    return NextResponse.json(success(null));
  } catch (e) {
    return NextResponse.json(failed(e));
  }
};
