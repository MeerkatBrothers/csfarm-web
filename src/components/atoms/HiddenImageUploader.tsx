"use client";

import { forwardRef } from "react";

import InvalidFormError from "@/lib/errors/invalidFormError";

interface HiddenImageUploaderProps {
  onSelectImage: (image: File) => void;
}

const HiddenImageUploader = forwardRef<HTMLInputElement, HiddenImageUploaderProps>(({ onSelectImage }, ref) => {
  const handleSelectImage = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const image: File | undefined = event.target.files?.[0];
    if (!image) {
      throw new InvalidFormError("이미지를 선택 해 주세요.");
    }

    onSelectImage(image);

    event.target.value = "";
  };

  return <input ref={ref} type="file" accept="image/*" className="hidden" onChange={handleSelectImage} />;
});

HiddenImageUploader.displayName = "HiddenImageUploader";

export default HiddenImageUploader;
