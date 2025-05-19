"use client";

import { useMutation } from "@tanstack/react-query";

import { Result } from "@/lib/types/result";
import ResultError from "@/lib/errors/resultError";

import uploadImage from "@/domains/image/usecases/uploadImage";
import { UploadImageForm } from "@/domains/image/models/uploadImageForm";

interface UseSignInParams {
  onSuccess?: (variables: UploadImageForm) => void;
  onError?: (error: Error, variables: UploadImageForm) => void;
}

const useUploadImage = ({ onSuccess, onError }: UseSignInParams) => {
  return useMutation({
    mutationFn: async (uploadImageForm: UploadImageForm) => {
      const uploadImageResult: Result<string> = await uploadImage(uploadImageForm);
      if (!uploadImageResult.ok) {
        throw new ResultError(uploadImageResult.message, uploadImageResult.statusCode);
      }

      return uploadImageResult.data;
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
