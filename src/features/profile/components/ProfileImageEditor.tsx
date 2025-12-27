'use client';

import { useRef } from 'react';
import { MdCameraAlt } from 'react-icons/md';

import { ICON_SIZE } from '@/shared/constants/ui';

import ProfileImage from '@/components/atoms/ProfileImage';
import HiddenImageUploader from '@/components/atoms/HiddenImageUploader';

interface ProfileImageEditorProps {
  initialProfileImageUrl: string | null;
  onSelect: (image: File) => void;
}

const ProfileImageEditor = ({ initialProfileImageUrl, onSelect }: ProfileImageEditorProps) => {
  const imageUploaderRef = useRef<HTMLInputElement | null>(null);

  return (
    <div>
      <div className="relative">
        <ProfileImage imageUrl={initialProfileImageUrl} />

        <div className="absolute right-0 bottom-0 rounded-full bg-white p-1">
          <MdCameraAlt size={ICON_SIZE} onClick={() => imageUploaderRef.current?.click()} />
        </div>
      </div>

      <HiddenImageUploader ref={imageUploaderRef} onSelectImage={onSelect} />
    </div>
  );
};

export default ProfileImageEditor;
