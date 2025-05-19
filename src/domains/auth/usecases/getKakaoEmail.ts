"use server";

import { Result, success, failed } from "@/lib/types/result";

import fetchKakaoEmail from "@/domains/auth/repositories/fetchKakaoEmail";

const getKakaoEmail = async (token: string): Promise<Result<string>> => {
  try {
    const kakaoEmail: string = await fetchKakaoEmail(token);

    return success(kakaoEmail);
  } catch (e) {
    return failed(e);
  }
};

export default getKakaoEmail;
