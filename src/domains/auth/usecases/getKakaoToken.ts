"use server";

import { Result, success, failed } from "@/lib/types/result";

import fetchKakaoToken from "@/domains/auth/repositories/fetchKakaoToken";

const getKakaoToken = async (code: string): Promise<Result<string>> => {
  try {
    const kakaoToken: string = await fetchKakaoToken(code);

    return success(kakaoToken);
  } catch (e) {
    return failed(e);
  }
};

export default getKakaoToken;
