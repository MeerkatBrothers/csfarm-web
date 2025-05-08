"use client";

import { useMutation } from "@tanstack/react-query";

import signUp from "@/domains/auth/usecases/signUp";
import { CredentialForm } from "@/domains/auth/models/form/credential";

interface UseSignUpParams {
  onSuccess?: () => void;
  onError?: (error: Error, variables: CredentialForm) => void;
}

const useSignUp = ({ onSuccess, onError }: UseSignUpParams) => {
  return useMutation({
    mutationFn: async (credentialForm: CredentialForm) => {
      await signUp(credentialForm);
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
