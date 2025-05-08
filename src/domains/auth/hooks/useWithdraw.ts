"use client";

import { useMutation } from "@tanstack/react-query";

import withdraw from "@/domains/auth/usecases/withdraw";

interface UseWithdrawParams {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}

const useWithdraw = ({ onSuccess, onError }: UseWithdrawParams) => {
  return useMutation({
    mutationFn: async () => {
      await withdraw();
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
