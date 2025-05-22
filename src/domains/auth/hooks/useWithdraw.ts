"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import withdraw from "@/domains/auth/usecases/withdraw";

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
      await withdraw();
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
