'use client';

import { useRouter } from 'next/navigation';

import { cn } from '@/shared/utils/cn';

import useMyProfile from '@/features/profile/hooks/useMyProfile';
import MyProfileSectionSkeleton from '@/features/profile/components/skeleton/MyProfileSectionSkeleton';

import SecondaryButton from '@/components/atoms/button/SecondaryButton';
import ProfileCard from '@/components/organisms/ProfileCard';

const MyProfileSection = () => {
  const router = useRouter();

  const { data: myProfile, isLoading, isError, error } = useMyProfile();

  if (isLoading) return <MyProfileSectionSkeleton />;
  if (isError) throw error;
  if (!myProfile) return null;

  const { nickname, profileImageUrl } = myProfile;

  return (
    <div
      className={cn(
        'flex flex-col items-center justify-between gap-4 overflow-hidden rounded-lg bg-gray-100 px-6 py-6',
        'md:flex-row md:px-7',
        'md:flex-row lg:px-8',
      )}
    >
      <ProfileCard nickname={nickname} profileImageUrl={profileImageUrl} />

      <SecondaryButton label="수정하기" onClick={() => router.push('/profile/update')} />
    </div>
  );
};

export default MyProfileSection;
