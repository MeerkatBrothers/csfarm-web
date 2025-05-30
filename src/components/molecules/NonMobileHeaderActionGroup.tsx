"use client";

import useLoginModal from "@/domains/auth/hooks/useLoginModal";

import TertiaryButton from "@/components/atoms/button/TertiaryButton";

const NonMobileHeaderActionGroup = () => {
  const { openLoginModal } = useLoginModal();

  return (
    <>
      <TertiaryButton label="로그인" onClick={openLoginModal} />
    </>
  );
};

export default NonMobileHeaderActionGroup;
// <ProfileImage imageUrl={null} size={36} />
