"use client";

import { useMutation } from "@tanstack/react-query";

import uploadImage from "@/domains/image/usecases/uploadImage";
import { UploadImageForm } from "@/domains/image/models/uploadImageForm";

interface UseUploadImageParams {
  onSuccess?: (variables: UploadImageForm) => void;
  onError?: (error: Error, variables: UploadImageForm) => void;
}

const useUploadImage = ({ onSuccess, onError }: UseUploadImageParams) => {
  return useMutation({
    mutationFn: async (uploadImageForm: UploadImageForm) => {
      const imageUrl: string = await uploadImage(uploadImageForm);

      return imageUrl;
    },
    onSuccess: (_, variables) => {
      onSuccess?.(variables);
    },
    onError,
  });
};

export default useUploadImage;
