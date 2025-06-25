import { useMutation } from "@tanstack/react-query";

import uploadImage from "@/domains/image/usecases/uploadImage";

interface UseUploadImageParams {
  onSuccess?: (imageUrl: string) => void;
}

const useUploadImage = ({ onSuccess }: UseUploadImageParams) => {
  return useMutation({
    mutationFn: async (image: File) => await uploadImage(image),
    onSuccess,
  });
};

export default useUploadImage;
