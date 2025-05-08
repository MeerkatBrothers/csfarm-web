"use client";

import { useMutation } from "@tanstack/react-query";

import signOut from "@/domains/auth/usecases/signOut";

interface UseSignOutParams {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}

const useSignOut = ({ onSuccess, onError }: UseSignOutParams) => {
  return useMutation({
    mutationFn: async () => {
      await signOut();
    },
    onSuccess: () => {
      onSuccess?.();
    },
    onError: (error) => {
      onError?.(error);
    },
  });
};

export default useSignOut;
