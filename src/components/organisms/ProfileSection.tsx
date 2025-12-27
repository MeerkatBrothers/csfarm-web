import type { Profile } from '@/features/profile/models/profile';

import ProfileImage from '@/components/atoms/ProfileImage';
import Heading from '@/components/atoms/typography/Heading';

interface ProfileSectionProps {
  profile: Profile;
}

const ProfileSection = ({ profile }: ProfileSectionProps) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <ProfileImage imageUrl={profile.profileImageUrl} />

      <Heading text={`${profile.nickname} 농부님 👨‍🌾`} scale={1} />
    </div>
  );
};

export default ProfileSection;
