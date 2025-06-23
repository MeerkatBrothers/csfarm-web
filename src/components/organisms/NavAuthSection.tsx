"use client";

import { useRouter } from "next/navigation";

import useIsLogin from "@/domains/auth/hooks/useIsLogin";
import useLoginModal from "@/domains/auth/hooks/useLoginModal";
import useSignOut from "@/domains/auth/hooks/useSignOut";

import NavLinker from "@/components/atoms/NavLinker";

const NavAuthSection = () => {
  const router = useRouter();

  const { isLogin, isLoading } = useIsLogin();

  const { openLoginModal } = useLoginModal();

  const { mutate: signOut } = useSignOut({
    onSuccess: () => router.replace("/"),
  });

  if (isLoading) {
    return null;
  }

  return (
    <>
      {isLogin ? (
        <NavLinker label="로그아웃" isActive={false} onClick={signOut} />
      ) : (
        <NavLinker label="로그인" isActive={false} onClick={openLoginModal} />
      )}
    </>
  );
};

export default NavAuthSection;
