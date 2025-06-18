import { useMutation, useQueryClient } from "@tanstack/react-query";

import withdraw from "@/domains/auth/usecases/withdraw";

interface UseWithdrawParams {
  onSuccess?: () => void;
}

const useWithdraw = ({ onSuccess }: UseWithdrawParams) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: withdraw,
    onSuccess: () => {
      queryClient.clear();

      onSuccess?.();
    },
  });
};

export default useWithdraw;
