"use client";

import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

import { SVG_SIZE } from "@/lib/constants/ui";

import useMyProfile from "@/domains/profile/hooks/useMyProfile";
import ProfileMenuCard from "@/domains/member/components/MemberMenuCard";

import Body2 from "@/components/atoms/typography/Body2";
import ProfileImage from "@/components/atoms/ProfileImage";
import DotLoader from "@/components/atoms/DotLoader";

const MemberMenuButton = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const { data: myProfile, isLoading } = useMyProfile();

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  if (isLoading) {
    return <DotLoader />;
  }

  if (!myProfile) {
    return null;
  }

  return (
    <div className="relative">
      <button className="flex items-center gap-2" onClick={toggleMenu}>
        <ProfileImage imageUrl={myProfile.profile.profileImageUrl} size={36} />

        <Body2 text={`${myProfile.profile.nickname} 님`} styles={{ weight: "font-bold" }} />

        <FiChevronDown size={SVG_SIZE} />
      </button>

      {isMenuOpen && (
        <div className="absolute right-0">
          <ProfileMenuCard />
        </div>
      )}
    </div>
  );
};

export default MemberMenuButton;
