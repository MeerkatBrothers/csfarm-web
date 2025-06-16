import { NextResponse } from "next/server";

import { Result, success, failed } from "@/lib/types/result";
import { validateOrThrow } from "@/lib/utils/zod";
import { getAccessTokenFromCookie } from "@/lib/cookie/accessToken";
import UnauthorizedError from "@/lib/errors/http/unauthorizedError";

import updateProfileSource from "@/domains/profile/datasources/updateProfileSource";
import { UpdateProfileReqDto, updateProfileReqDtoSchema } from "@/domains/profile/dtos/request/updateProfileReqDto";

export const PATCH = async (request: Request): Promise<NextResponse<Result<null>>> => {
  try {
    const requestBody: unknown = await request.json();
    const validatedRequestBody: UpdateProfileReqDto = validateOrThrow(updateProfileReqDtoSchema, requestBody);

    const storedAccessToken: string | null = await getAccessTokenFromCookie();
    if (!storedAccessToken) {
      throw new UnauthorizedError();
    }

    await updateProfileSource(validatedRequestBody, storedAccessToken);

    return NextResponse.json(success(null));
  } catch (e) {
    return NextResponse.json(failed(e));
  }
};
