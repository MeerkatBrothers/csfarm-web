"use client";

import { useMutation } from "@tanstack/react-query";

import signIn from "@/domains/auth/usecases/signIn";
import { CredentialForm } from "@/domains/auth/models/form/credential";

interface UseSignInParams {
  onSuccess?: () => void;
  onError?: (error: Error, variables: CredentialForm) => void;
}

const useSignIn = ({ onSuccess, onError }: UseSignInParams) => {
  return useMutation({
    mutationFn: async (credentialForm: CredentialForm) => {
      await signIn(credentialForm);
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
