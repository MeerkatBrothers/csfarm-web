import Image from "next/image";

interface Props {
  imageUrl: string | null;
  size: number;
}

const ProfileImage = ({ imageUrl, size }: Props) => {
  return (
    <Image
      className="border border-service-gray-light rounded-full object-cover"
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
