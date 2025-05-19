"use client";

import { useMutation } from "@tanstack/react-query";

import { Result } from "@/lib/types/result";
import ResultError from "@/lib/errors/resultError";

import signUp from "@/domains/auth/usecases/signUp";
import { CredentialForm } from "@/domains/auth/models/form/credential";

interface UseSignUpParams {
  onSuccess?: () => void;
  onError?: (error: Error, variables: CredentialForm) => void;
}

const useSignUp = ({ onSuccess, onError }: UseSignUpParams) => {
  return useMutation({
    mutationFn: async (credentialForm: CredentialForm) => {
      const signUpResult: Result<null> = await signUp(credentialForm);
      if (!signUpResult.ok) {
        throw new ResultError(signUpResult.message, signUpResult.statusCode);
      }
    },
    onSuccess: () => {
      onSuccess?.();
    },
    onError: (error, variables) => {
      onError?.(error, variables);
    },
  });
};

export default useSignUp;
