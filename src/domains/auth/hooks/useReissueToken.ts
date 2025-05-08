"use client";

import { useMutation } from "@tanstack/react-query";

import reissueToken from "@/domains/auth/usecases/reissueToken";

interface UseReissueTokenParams {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}

const useReissueToken = ({ onSuccess, onError }: UseReissueTokenParams) => {
  return useMutation({
    mutationFn: async () => {
      await reissueToken();
    },
    onSuccess: () => {
      onSuccess?.();
    },
    onError: (error) => {
      onError?.(error);
    },
  });
};

export default useReissueToken;
