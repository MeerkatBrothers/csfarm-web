"use client";

import { useEffect } from "react";

import ResultError from "@/lib/errors/resultError";

import useKakaoCallback from "@/domains/auth/hooks/useKakaoCallback";
import useSignUp from "@/domains/auth/hooks/useSignUp";
import useSignIn from "@/domains/auth/hooks/useSignIn";

interface UseKakaoAuthParams {
  onSuccess: () => void;
  onError: (error: Error) => void;
}

const useKakaoAuth = ({ onSuccess, onError }: UseKakaoAuthParams) => {
  const { mutate: signUp } = useSignUp({
    onSuccess,
    onError,
  });

  const { mutate: signIn } = useSignIn({
    onSuccess,
    onError: (error, credential) => {
      if (error instanceof ResultError && error.statusCode === 404) {
        signUp(credential);
      } else {
        onError(error);
      }
    },
  });

  const { execute: kakaoCallback } = useKakaoCallback({
    onSuccess: signIn,
    onError,
  });

  useEffect(() => {
    kakaoCallback();
  }, []);
};

export default useKakaoAuth;
