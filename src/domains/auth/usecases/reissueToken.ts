import { Result, success, failed } from "@/lib/types/result";
import { validateOrThrow } from "@/lib/utils/zod";
import { setAccessTokenToCookie } from "@/lib/cookie/accessToken";
import { setRefreshTokenToCookie } from "@/lib/cookie/refreshToken";

import fetchReissueToken from "@/domains/auth/repositories/fetchReissueToken";
import { Token, tokenSchema } from "@/domains/auth/models/fragments/token";

const reissueToken = async (): Promise<Result<Token>> => {
  try {
    const token: Token = await fetchReissueToken();

    const validatedToken: Token = validateOrThrow(tokenSchema, token);
    const { accessToken, refreshToken } = validatedToken;

    await Promise.all([setAccessTokenToCookie(accessToken), setRefreshTokenToCookie(refreshToken)]);

    return success(validatedToken);
  } catch (e) {
    return failed(e);
  }
};

export default reissueToken;
