import { useMutation, useQueryClient } from "@tanstack/react-query";

import signOut from "@/domains/auth/usecases/signOut";

interface UseSignOutParams {
  onSuccess?: () => void;
}

const useSignOut = ({ onSuccess }: UseSignOutParams) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: signOut,
    onSuccess: () => {
      queryClient.clear();

      onSuccess?.();
    },
  });
};

export default useSignOut;
