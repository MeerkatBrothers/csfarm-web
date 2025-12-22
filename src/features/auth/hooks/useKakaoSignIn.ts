import { useMutation } from '@tanstack/react-query';

import ResultError from '@/shared/errors/client/result-error';

import { LoginPlatform } from '@/features/auth/enums/loginPlatform';
import useSignIn from '@/features/auth/hooks/useSignIn';
import getKakaoEmail from '@/features/auth/api/bff/get-kakao-email';
import type { CredentialForm } from '@/features/auth/models/credential.form';

interface UseKakaoSignInParams {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}

const useKakaoSignIn = ({ onSuccess, onError }: UseKakaoSignInParams = {}) => {
  const { mutate: signIn } = useSignIn({
    onSuccess,
    onError,
  });

  return useMutation({
    mutationFn: async (kakaoCode: string) => {
      const result = await getKakaoEmail(kakaoCode);
      if (!result.ok) throw new ResultError(result.statusCode, result.code);

      return result.data;
    },
    onSuccess: (identifier) => {
      const credentialForm: CredentialForm = { identifier, loginPlatform: LoginPlatform.KAKAO };

      signIn(credentialForm);
    },
    onError,
  });
};

export default useKakaoSignIn;
