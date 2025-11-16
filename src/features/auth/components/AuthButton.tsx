'use client';

import MemberMenuButton from '@/features/member/components/MemberMenuButton';

import useIsLogin from '@/features/auth/hooks/useIsLogin';
import useLoginModal from '@/features/auth/hooks/useLoginModal';

import TertiaryButton from '@/components/atoms/button/TertiaryButton';
import DotLoader from '@/components/atoms/DotLoader';

const AuthButton = () => {
  const { isLogin, isLoading } = useIsLogin();

  const { openLoginModal } = useLoginModal();

  if (isLoading) {
    return <DotLoader />;
  }

  if (isLogin) {
    return <MemberMenuButton />;
  }

  return <TertiaryButton label="로그인" onClick={openLoginModal} />;
};

export default AuthButton;
