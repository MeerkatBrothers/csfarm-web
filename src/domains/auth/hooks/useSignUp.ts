"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { Result } from "@/lib/types/result";
import ResultError from "@/lib/errors/resultError";

import signUp from "@/domains/auth/usecases/signUp";
import { CredentialForm } from "@/domains/auth/models/fragments/credentialForm";

import PROFILE_QUERY_KEYS from "@/domains/profile/constants/queryKey";

import INSIGHT_QUERY_KEYS from "@/domains/insight/constants/queryKey";

import PROGRESS_QUERY_KEYS from "@/domains/progress/constants/queryKey";

interface UseSignUpParams {
  onSuccess?: () => void;
  onError?: (error: Error, variables: CredentialForm) => void;
}

const useSignUp = ({ onSuccess, onError }: UseSignUpParams) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (credentialForm: CredentialForm) => {
      const signUpResult: Result<null> = await signUp(credentialForm);
      if (!signUpResult.ok) {
        throw new ResultError(signUpResult.message, signUpResult.statusCode);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: PROFILE_QUERY_KEYS.MY });
      queryClient.invalidateQueries({ queryKey: INSIGHT_QUERY_KEYS.HARVESTED });
      queryClient.invalidateQueries({ queryKey: PROGRESS_QUERY_KEYS.MY });

      onSuccess?.();
    },
    onError: (error, variables) => {
      onError?.(error, variables);
    },
  });
};

export default useSignUp;
