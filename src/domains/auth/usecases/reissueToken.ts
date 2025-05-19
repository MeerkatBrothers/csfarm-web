import { Result, success, failed } from "@/lib/types/result";
import { setAccessTokenToCookie } from "@/lib/cookie/accessToken";
import { setRefreshTokenToCookie } from "@/lib/cookie/refreshToken";

import fetchReissueToken from "@/domains/auth/repositories/fetchReissueToken";
import Token from "@/domains/auth/models/token";

const reissueToken = async (): Promise<Result<Token>> => {
  try {
    const token: Token = await fetchReissueToken();

    const { accessToken, refreshToken } = token;

    await Promise.all([setAccessTokenToCookie(accessToken), setRefreshTokenToCookie(refreshToken)]);

    return success(token);
  } catch (e) {
    return failed(e);
  }
};

export default reissueToken;
