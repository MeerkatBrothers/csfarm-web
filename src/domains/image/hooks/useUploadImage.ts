import { useMutation } from "@tanstack/react-query";

import uploadImage from "@/domains/image/usecases/uploadImage";
import { UploadImageForm } from "@/domains/image/models/uploadImageForm";

interface UseUploadImageParams {
  onSuccess?: (data: string) => void;
}

const useUploadImage = ({ onSuccess }: UseUploadImageParams) => {
  return useMutation({
    mutationFn: async (uploadImageForm: UploadImageForm) => {
      const imageUrl: string = await uploadImage(uploadImageForm);

      return imageUrl;
    },
    onSuccess,
  });
};

export default useUploadImage;
