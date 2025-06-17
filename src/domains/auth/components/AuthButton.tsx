"use client";

import useIsLogin from "@/domains/auth/hooks/useIsLogin";
import useLoginModal from "@/domains/auth/hooks/useLoginModal";

import MemberMenuButton from "@/domains/member/components/MemberMenuButton";

import TertiaryButton from "@/components/atoms/button/TertiaryButton";
import DotLoader from "@/components/atoms/DotLoader";

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
