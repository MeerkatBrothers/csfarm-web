import useLoginStatus from '@/features/auth/hooks/useLoginStatus';
import useLoginModal from '@/features/auth/hooks/useLoginModal';

interface UseActionParams {
  action: () => void;
}

const useAuthAction = ({ action }: UseActionParams) => {
  const { isLogin, isLoading } = useLoginStatus();

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
