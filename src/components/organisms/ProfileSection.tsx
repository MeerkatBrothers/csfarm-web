import { type Profile } from '@/features/profile/models/profile';

import Heading1 from '@/components/atoms/typography/Heading1';
import ProfileImage from '@/components/atoms/ProfileImage';

interface ProfileSectionProps {
  profile: Profile;
}

const ProfileSection = ({ profile }: ProfileSectionProps) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <ProfileImage imageUrl={profile.profileImageUrl} />

      <Heading1 text={`${profile.nickname} 농부님 👨‍🌾`} />
    </div>
  );
};

export default ProfileSection;
