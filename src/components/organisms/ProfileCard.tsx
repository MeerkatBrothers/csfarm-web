import ProfileImage from '@/components/atoms/ProfileImage';
import Headline from '@/components/atoms/typography/Headline';

interface ProfileCardProps {
  nickname: string;
  profileImageUrl: string | null;
}

const ProfileCard = ({ nickname, profileImageUrl }: ProfileCardProps) => {
  return (
    <div className="flex items-center gap-4">
      <ProfileImage imageUrl={profileImageUrl} />

      <Headline text={`안녕하세요! ${nickname} 농부님`} scale={1} />
    </div>
  );
};

export default ProfileCard;
