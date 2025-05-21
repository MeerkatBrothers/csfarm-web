"use client";

import { useMutation } from "@tanstack/react-query";

import { Result } from "@/lib/types/result";
import ResultError from "@/lib/errors/resultError";

import { LOGIN_PLATFORM } from "@/domains/auth/enums/loginPlatform";
import useSignIn from "@/domains/auth/hooks/useSignIn";
import useSignUp from "@/domains/auth/hooks/useSignUp";
import kakaoEmailApi from "@/domains/auth/apis/kakaoEmailApi";
import { CredentialForm } from "@/domains/auth/models/fragments/credentialForm";

interface UseKakaoSignInParams {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}

const useKakaoSignIn = ({ onSuccess, onError }: UseKakaoSignInParams) => {
  const { mutate: signUp } = useSignUp({
    onSuccess,
    onError,
  });

  const { mutate: signIn } = useSignIn({
    onSuccess,
    onError: (error, variables) => {
      if (error instanceof ResultError && error.statusCode === 404) {
        signUp(variables);
      } else {
        onError?.(error);
      }
    },
  });

  return useMutation({
    mutationFn: async (kakaoCode: string) => {
      const kakaoEmailResult: Result<string> = await kakaoEmailApi(kakaoCode);
      if (!kakaoEmailResult.ok) {
        throw new ResultError(kakaoEmailResult.message, kakaoEmailResult.statusCode);
      }
      const kakaoEmail: string = kakaoEmailResult.data;

      return kakaoEmail;
    },
    onSuccess: (_, variables) => {
      const credentialForm: CredentialForm = { identifier: variables, loginPlatform: LOGIN_PLATFORM.KAKAO };

      signIn(credentialForm);
    },
    onError,
  });
};

export default useKakaoSignIn;
