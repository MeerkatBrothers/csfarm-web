"use client";

import { useMutation } from "@tanstack/react-query";

import { Result } from "@/lib/types/result";
import ResultError from "@/lib/errors/resultError";

import withdraw from "@/domains/auth/usecases/withdraw";

interface UseWithdrawParams {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}

const useWithdraw = ({ onSuccess, onError }: UseWithdrawParams) => {
  return useMutation({
    mutationFn: async () => {
      const withdrawResult: Result<null> = await withdraw();
      if (!withdrawResult.ok) {
        throw new ResultError(withdrawResult.message, withdrawResult.statusCode);
      }
    },
    onSuccess: () => {
      onSuccess?.();
    },
    onError: (error) => {
      onError?.(error);
    },
  });
};

export default useWithdraw;
