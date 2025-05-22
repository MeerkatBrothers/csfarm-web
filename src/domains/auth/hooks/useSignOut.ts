"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { Result } from "@/lib/types/result";
import ResultError from "@/lib/errors/resultError";

import signOut from "@/domains/auth/usecases/signOut";

import PROFILE_QUERY_KEYS from "@/domains/profile/constants/queryKey";

import INSIGHT_QUERY_KEYS from "@/domains/insight/constants/queryKey";

import PROGRESS_QUERY_KEYS from "@/domains/progress/constants/queryKey";

interface UseSignOutParams {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}

const useSignOut = ({ onSuccess, onError }: UseSignOutParams) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      const signOutResult: Result<null> = await signOut();
      if (!signOutResult.ok) {
        throw new ResultError(signOutResult.message, signOutResult.statusCode);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: PROFILE_QUERY_KEYS.MY });
      queryClient.invalidateQueries({ queryKey: INSIGHT_QUERY_KEYS.HARVESTED });
      queryClient.invalidateQueries({ queryKey: PROGRESS_QUERY_KEYS.MY });

      onSuccess?.();
    },
    onError,
  });
};

export default useSignOut;
