"use client";

import { useRef } from "react";
import { MdCameraAlt } from "react-icons/md";

import ProfileImage from "@/components/atoms/ProfileImage";
import HiddenImageUploader from "@/components/atoms/HiddenImageUploader";

interface Props {
  initialProfileImageUrl: string | null;
  onSelect: (image: File) => void;
}

const ProfileImageEditor = ({ initialProfileImageUrl, onSelect }: Props) => {
  const imageUploaderRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <div className="relative">
        <ProfileImage imageUrl={initialProfileImageUrl} size={120} />

        <div className="absolute bottom-0 right-0 p-1 rounded-full bg-white">
          <MdCameraAlt size={24} onClick={() => imageUploaderRef.current?.click()} />
        </div>
      </div>

      <HiddenImageUploader ref={imageUploaderRef} onChange={onSelect} />
    </div>
  );
};

export default ProfileImageEditor;
