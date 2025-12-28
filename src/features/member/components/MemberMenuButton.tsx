'use client';

import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

import { ICON_SIZE } from '@/shared/constants/ui';

import useMyProfile from '@/features/profile/hooks/useMyProfile';
import MemberMenuCard from '@/features/member/components/MemberMenuCard';

import ProfileImage from '@/components/atoms/ProfileImage';
import DotLoader from '@/components/atoms/DotLoader';
import Body from '@/components/atoms/typography/Body';

const MemberMenuButton = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { data: myProfile, isLoading } = useMyProfile();

  const toggleMenu = (): void => setIsMenuOpen(!isMenuOpen);

  if (isLoading) return <DotLoader />;
  if (!myProfile) return null;

  return (
    <div className="relative">
      <button className="flex items-center gap-1" onClick={toggleMenu}>
        <ProfileImage imageUrl={myProfile.profileImageUrl} size={28} />

        <Body text={`${myProfile.nickname}님`} scale={2} styles={{ weight: 'font-bold' }} />

        <FiChevronDown size={ICON_SIZE} />
      </button>

      {isMenuOpen && (
        <div className="absolute right-0">
          <MemberMenuCard />
        </div>
      )}
    </div>
  );
};

export default MemberMenuButton;
