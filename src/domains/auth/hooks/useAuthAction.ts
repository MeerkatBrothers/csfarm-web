import useIsLogin from "@/domains/auth/hooks/useIsLogin";
import useLoginModal from "@/domains/auth/hooks/useLoginModal";

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
