import { useMutation } from '@tanstack/react-query';

import ResultError from '@/lib/errors/resultError';

import { LoginPlatform } from '@/features/auth/enums/loginPlatform';
import useSignIn from '@/features/auth/hooks/useSignIn';
import useSignUp from '@/features/auth/hooks/useSignUp';
import getKakaoEmail from '@/features/auth/usecases/getKakaoEmail';
import { type CredentialForm } from '@/features/auth/models/credentialForm';

interface UseKakaoSignInParams {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}

const useKakaoSignIn = ({ onSuccess, onError }: UseKakaoSignInParams) => {
  const { mutate: signUp } = useSignUp({
    onSuccess,
    onError,
  });

  const { mutate: signIn } = useSignIn({
    onSuccess,
    onError: (error, credentialForm) => {
      if (error instanceof ResultError && error.statusCode === 404) {
        signUp(credentialForm);
      } else {
        onError?.(error);
      }
    },
  });

  return useMutation({
    mutationFn: async (kakaoCode: string) => await getKakaoEmail(kakaoCode),
    onSuccess: (identifier) => {
      const credentialForm: CredentialForm = { identifier, loginPlatform: LoginPlatform.KAKAO };

      signIn(credentialForm);
    },
    onError,
  });
};

export default useKakaoSignIn;
