import { useQueryClient, useMutation } from "@tanstack/react-query";

import signUp from "@/domains/auth/usecases/signUp";
import { CredentialForm } from "@/domains/auth/models/fragments/credentialForm";

interface UseSignUpParams {
  onSuccess?: () => void;
  onError?: (error: Error, credentialForm: CredentialForm) => void;
}

const useSignUp = ({ onSuccess, onError }: UseSignUpParams) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (credentialForm: CredentialForm) => await signUp(credentialForm),
    onSuccess: () => {
      queryClient.clear();

      onSuccess?.();
    },
    onError,
  });
};

export default useSignUp;
