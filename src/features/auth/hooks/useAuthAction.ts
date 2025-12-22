import useIsLogin from '@/features/auth/hooks/useIsLogin';
import useLoginModal from '@/features/auth/hooks/useLoginModal';

interface UseActionParams {
  action: () => void;
}

const useAuthAction = ({ action }: UseActionParams) => {
  const { isLogin, isLoading } = useIsLogin();

  const { open } = useLoginModal();

  const authAction = (): void => {
    if (isLoading) return;
    if (!isLogin) {
      open();

      return;
    }

    action();
  };

  return authAction;
};

export default useAuthAction;
