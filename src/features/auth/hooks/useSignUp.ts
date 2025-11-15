import { useQueryClient, useMutation } from '@tanstack/react-query';

import signUp from '@/features/auth/usecases/signUp';
import { CredentialForm } from '@/features/auth/models/fragments/credentialForm';

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
