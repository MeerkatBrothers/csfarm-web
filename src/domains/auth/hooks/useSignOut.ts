"use client";

import { useMutation } from "@tanstack/react-query";

import signOut from "@/domains/auth/usecases/signOut";

interface UseSignOutParams {
  onSuccess?: () => void;
}

const useSignOut = ({ onSuccess }: UseSignOutParams) => {
  return useMutation({
    mutationFn: async () => {
      await signOut();
    },
    onSuccess: () => {
      onSuccess?.();
    },
  });
};

export default useSignOut;
