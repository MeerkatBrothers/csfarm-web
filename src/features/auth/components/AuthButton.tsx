'use client';

import useLoginStatus from '@/features/auth/hooks/useLoginStatus';
import useLoginModal from '@/features/auth/hooks/useLoginModal';

import MemberMenuButton from '@/features/member/components/MemberMenuButton';

import TertiaryButton from '@/components/atoms/button/TertiaryButton';
import DotLoader from '@/components/atoms/DotLoader';

const AuthButton = () => {
  const { isLogin, isLoading } = useLoginStatus();

  const { open } = useLoginModal();

  if (isLoading) return <DotLoader />;
  if (isLogin) return <MemberMenuButton />;

  return <TertiaryButton label="로그인" onClick={open} />;
};

export default AuthButton;
