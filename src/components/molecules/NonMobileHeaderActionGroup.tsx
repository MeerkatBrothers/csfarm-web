"use client";

import useLoginModal from "@/domains/auth/hooks/useLoginModal";

import TertiaryButton from "@/components/atoms/button/TertiaryButton";
import NavLinkerSection from "@/components/organisms/NavLinkerSection";

const NonMobileHeaderActionGroup = () => {
  const { openLoginModal } = useLoginModal();

  return (
    <div className="flex items-center gap-10">
      <NavLinkerSection />

      <TertiaryButton label="로그인" onClick={openLoginModal} />
    </div>
  );
};

export default NonMobileHeaderActionGroup;
// <ProfileImage imageUrl={null} size={36} />
