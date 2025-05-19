"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { Result } from "@/lib/types/result";
import ResultError from "@/lib/errors/resultError";

import signIn from "@/domains/auth/usecases/signIn";
import { CredentialForm } from "@/domains/auth/models/fragments/credentialForm";

import PROFILE_QUERY_KEYS from "@/domains/profile/constants/queryKey";

import INSIGHT_QUERY_KEYS from "@/domains/insight/constants/queryKey";

import PROGRESS_QUERY_KEYS from "@/domains/progress/constants/queryKey";

interface UseSignInParams {
  onSuccess?: () => void;
  onError?: (error: Error, variables: CredentialForm) => void;
}

const useSignIn = ({ onSuccess, onError }: UseSignInParams) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (credentialForm: CredentialForm) => {
      const signInResult: Result<null> = await signIn(credentialForm);
      if (!signInResult.ok) {
        throw new ResultError(signInResult.message, signInResult.statusCode);
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

export default useSignIn;
