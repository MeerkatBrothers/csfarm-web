import useIsLogin from '@/features/auth/hooks/useIsLogin';
import useLoginModal from '@/features/auth/hooks/useLoginModal';

interface UseActionParams {
  action: () => void;
}

const useAuthAction = ({ action }: UseActionParams) => {
  const { isLogin, isLoading } = useIsLogin();

  const { openLoginModal } = useLoginModal();

  const authAction = (): void => {
    if (isLoading) {
      return;
    }

    if (!isLogin) {
      openLoginModal();

      return;
    }

    action();
  };

  return authAction;
};

export default useAuthAction;
