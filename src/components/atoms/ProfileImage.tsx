import Image from 'next/image';

interface ProfileImageProps {
  imageUrl: string | null;
  size?: number;
}

const ProfileImage = ({ imageUrl, size = 60 }: ProfileImageProps) => {
  return (
    <Image
      className="border-service-gray-light rounded-full border object-cover"
      src={imageUrl ?? '/images/profile_mock_image.png'}
      width={size}
      height={size}
      style={{ width: size, height: size }}
      priority
      alt="profile image"
    />
  );
};

export default ProfileImage;
