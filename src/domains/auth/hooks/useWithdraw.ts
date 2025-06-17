import { useMutation, useQueryClient } from "@tanstack/react-query";

import withdraw from "@/domains/auth/usecases/withdraw";

interface UseWithdrawParams {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}

const useWithdraw = ({ onSuccess, onError }: UseWithdrawParams) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: withdraw,
    onSuccess: () => {
      queryClient.clear();

      onSuccess?.();
    },
    onError,
  });
};

export default useWithdraw;
