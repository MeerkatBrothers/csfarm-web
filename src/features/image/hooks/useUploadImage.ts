import { useMutation } from '@tanstack/react-query';

import uploadImage from '@/features/image/usecases/uploadImage';

interface UseUploadImageParams {
  onSuccess?: (imageUrl: string) => void;
  onError?: (error: Error) => void;
}

const useUploadImage = ({ onSuccess, onError }: UseUploadImageParams = {}) => {
  return useMutation({
    mutationFn: async (image: File) => await uploadImage(image),
    onSuccess,
    onError,
  });
};

export default useUploadImage;
