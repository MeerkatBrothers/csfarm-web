"use client";

import { useMutation } from "@tanstack/react-query";

import { Result } from "@/lib/types/result";
import ResultError from "@/lib/errors/resultError";

import signIn from "@/domains/auth/usecases/signIn";
import { CredentialForm } from "@/domains/auth/models/form/credential";

interface UseSignInParams {
  onSuccess?: () => void;
  onError?: (error: Error, variables: CredentialForm) => void;
}

const useSignIn = ({ onSuccess, onError }: UseSignInParams) => {
  return useMutation({
    mutationFn: async (credentialForm: CredentialForm) => {
      const signInResult: Result<null> = await signIn(credentialForm);
      if (!signInResult.ok) {
        throw new ResultError(signInResult.message, signInResult.statusCode);
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

export default useSignIn;
