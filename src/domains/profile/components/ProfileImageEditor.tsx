"use client";

import { useRef } from "react";
import { MdCameraAlt } from "react-icons/md";

import { ICON_SIZE } from "@/lib/constants/ui";

import ProfileImage from "@/components/atoms/ProfileImage";
import HiddenImageUploader from "@/components/atoms/HiddenImageUploader";

interface ProfileImageEditorProps {
  initialProfileImageUrl: string | null;
  onSelect: (image: File) => void;
}

const ProfileImageEditor = ({ initialProfileImageUrl, onSelect }: ProfileImageEditorProps) => {
  const imageUploaderRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <div className="relative">
        <ProfileImage imageUrl={initialProfileImageUrl} />

        <div className="absolute bottom-0 right-0 p-1 rounded-full bg-white">
          <MdCameraAlt size={ICON_SIZE} onClick={() => imageUploaderRef.current?.click()} />
        </div>
      </div>

      <HiddenImageUploader ref={imageUploaderRef} onSelectImage={onSelect} />
    </div>
  );
};

export default ProfileImageEditor;
