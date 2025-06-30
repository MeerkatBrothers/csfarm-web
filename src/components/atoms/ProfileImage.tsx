import Image from "next/image";

interface ProfileImageProps {
  imageUrl: string | null;
  size?: number;
}

const ProfileImage = ({ imageUrl, size = 120 }: ProfileImageProps) => {
  return (
    <Image
      className="rounded-full object-cover border border-service-gray-light"
      src={imageUrl ?? "/images/profile_mock_image.png"}
      width={size}
      height={size}
      style={{ width: size, height: size }}
      priority
      alt="profile image"
    />
  );
};

export default ProfileImage;
