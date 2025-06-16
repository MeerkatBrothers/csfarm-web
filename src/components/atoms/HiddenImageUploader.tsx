"use client";

import { forwardRef } from "react";

import InvalidFormError from "@/lib/errors/invalidFormError";

interface HiddenImageUploaderProps {
  onChange: (image: File) => void;
}

const HiddenImageUploader = forwardRef<HTMLInputElement, HiddenImageUploaderProps>(({ onChange }, ref) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const image: File | undefined = event.target.files?.[0];
    if (!image) {
      throw new InvalidFormError("이미지를 선택 해 주세요.");
    }

    onChange(image);

    event.target.value = "";
  };

  return <input ref={ref} type="file" accept="image/*" className="hidden" onChange={handleChange} />;
});

HiddenImageUploader.displayName = "HiddenImageUploader";

export default HiddenImageUploader;
