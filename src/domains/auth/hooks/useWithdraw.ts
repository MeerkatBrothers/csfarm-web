"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { Result } from "@/lib/types/result";
import ResultError from "@/lib/errors/resultError";

import withdrawApi from "@/domains/auth/apis/withdrawApi";

import PROFILE_QUERY_KEYS from "@/domains/profile/constants/queryKey";

import INSIGHT_QUERY_KEYS from "@/domains/insight/constants/queryKey";

import PROGRESS_QUERY_KEYS from "@/domains/progress/constants/queryKey";

interface UseWithdrawParams {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}

const useWithdraw = ({ onSuccess, onError }: UseWithdrawParams) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      const withdrawResult: Result<null> = await withdrawApi();
      if (!withdrawResult.ok) {
        throw new ResultError(withdrawResult.message, withdrawResult.statusCode);
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

export default useWithdraw;
