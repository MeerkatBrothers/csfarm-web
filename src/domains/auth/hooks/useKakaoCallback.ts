"use client";

import { useCallback } from "react";

import { Result } from "@/lib/types/result";
import ResultError from "@/lib/errors/resultError";
import InternalServerError from "@/lib/errors/http/internalServerError";

import { LOGIN_PLATFORM } from "@/domains/auth/enums/loginPlatform";
import getKakaoToken from "@/domains/auth/usecases/getKakaoToken";
import getKakaoEmail from "@/domains/auth/usecases/getKakaoEmail";
import { CredentialForm } from "@/domains/auth/models/fragments/credentialForm";

interface UseKakaoCallbackParams {
  onSuccess: (credentialForm: CredentialForm) => void;
  onError: (error: Error) => void;
}

const useKakaoCallback = ({ onSuccess, onError }: UseKakaoCallbackParams) => {
  const execute = useCallback(async (): Promise<void> => {
    try {
      const code: string = new URL(window.location.href).searchParams.get("code") ?? "";

      const kakaoTokenResult: Result<string> = await getKakaoToken(code);
      if (!kakaoTokenResult.ok) {
        throw new ResultError(kakaoTokenResult.message, kakaoTokenResult.statusCode);
      }
      const kakaoToken: string = kakaoTokenResult.data;

      const kakaoEmailResult: Result<string> = await getKakaoEmail(kakaoToken);
      if (!kakaoEmailResult.ok) {
        throw new ResultError(kakaoEmailResult.message, kakaoEmailResult.statusCode);
      }
      const kakaoEmail: string = kakaoEmailResult.data;

      const credentialForm: CredentialForm = { identifier: kakaoEmail, loginPlatform: LOGIN_PLATFORM.KAKAO };

      onSuccess(credentialForm);
    } catch (e) {
      const error: Error = e instanceof Error ? e : new InternalServerError();

      onError(error);
    }
  }, [onError, onSuccess]);

  return { execute };
};

export default useKakaoCallback;
