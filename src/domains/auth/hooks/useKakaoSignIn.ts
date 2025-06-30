import { useMutation } from "@tanstack/react-query";

import ResultError from "@/lib/errors/resultError";

import { LOGIN_PLATFORM } from "@/domains/auth/enums/loginPlatform";
import useSignIn from "@/domains/auth/hooks/useSignIn";
import useSignUp from "@/domains/auth/hooks/useSignUp";
import getKakaoEmail from "@/domains/auth/usecases/getKakaoEmail";
import { CredentialForm } from "@/domains/auth/models/fragments/credentialForm";

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
      const credentialForm: CredentialForm = { identifier, loginPlatform: LOGIN_PLATFORM.KAKAO };

      signIn(credentialForm);
    },
    onError,
  });
};

export default useKakaoSignIn;
