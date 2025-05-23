"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import signOut from "@/domains/auth/usecases/signOut";

interface UseSignOutParams {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}

const useSignOut = ({ onSuccess, onError }: UseSignOutParams) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      await signOut();
    },
    onSuccess: () => {
      queryClient.clear();

      onSuccess?.();
    },
    onError,
  });
};

export default useSignOut;
