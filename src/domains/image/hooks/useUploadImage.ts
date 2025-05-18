"use client";

import { useMutation } from "@tanstack/react-query";

import uploadImage from "@/domains/image/usecases/uploadImage";
import { UploadImageForm } from "@/domains/image/models/uploadImageForm";

interface UseSignInParams {
  onSuccess?: (variables: UploadImageForm) => void;
  onError?: (error: Error, variables: UploadImageForm) => void;
}

const useUploadImage = ({ onSuccess, onError }: UseSignInParams) => {
  return useMutation({
    mutationFn: async (uploadImageForm: UploadImageForm) => {
      await uploadImage(uploadImageForm);
    },
    onSuccess: (_, variables) => {
      onSuccess?.(variables);
    },
    onError: (error, variables) => {
      onError?.(error, variables);
    },
  });
};

export default useUploadImage;
