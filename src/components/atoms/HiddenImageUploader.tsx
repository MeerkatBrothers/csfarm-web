'use client';

import { forwardRef } from 'react';

import { ImageErrorCode } from '@/features/image/errors/profile-error-code';
import InvalidFormError from '@/shared/errors/client/invalid-form-error';

interface HiddenImageUploaderProps {
  onSelectImage: (image: File) => void;
}

const HiddenImageUploader = forwardRef<HTMLInputElement, HiddenImageUploaderProps>(
  ({ onSelectImage }, ref) => {
    const handleSelectImage = (event: React.ChangeEvent<HTMLInputElement>): void => {
      const image = event.target.files?.[0];
      if (!image) throw new InvalidFormError(ImageErrorCode.INAGE_NOT_SELECTED);

      onSelectImage(image);

      event.target.value = '';
    };

    return (
      <input
        ref={ref}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleSelectImage}
      />
    );
  },
);

HiddenImageUploader.displayName = 'HiddenImageUploader';

export default HiddenImageUploader;
