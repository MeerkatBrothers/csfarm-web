import { useMutation } from '@tanstack/react-query';

import { validateOrThrow } from '@/shared/utils/zod';
import ResultError from '@/shared/errors/client/result-error';

import uploadImage from '@/features/image/apis/bff/upload-image';
import { imageFormSchema, type ImageForm } from '@/features/image/models/image.form';

interface UseUploadImageParams {
  onSuccess?: (imageUrl: string) => void;
  onError?: (error: Error) => void;
}

const useUploadImage = ({ onSuccess, onError }: UseUploadImageParams = {}) => {
  return useMutation({
    mutationFn: async (image: File) => {
      const form: ImageForm = { image };
      const validatedForm = validateOrThrow(imageFormSchema, form);

      const result = await uploadImage(validatedForm);
      if (!result.ok) throw new ResultError(result.statusCode, result.code);

      return result.data.imageUrl;
    },
    onSuccess,
    onError,
  });
};

export default useUploadImage;
