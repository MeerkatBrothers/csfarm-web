import { useQueryClient, useMutation } from '@tanstack/react-query';

import signIn from '@/features/auth/usecases/signIn';
import { CredentialForm } from '@/features/auth/models/fragments/credentialForm';

interface UseSignInParams {
  onSuccess?: () => void;
  onError?: (error: Error, credentialForm: CredentialForm) => void;
}

const useSignIn = ({ onSuccess, onError }: UseSignInParams) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (credentialForm: CredentialForm) => await signIn(credentialForm),
    onSuccess: () => {
      queryClient.clear();

      onSuccess?.();
    },
    onError,
  });
};

export default useSignIn;
