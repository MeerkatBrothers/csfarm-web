import bffFetcher from '@/shared/apis/fetchers/bff-fetcher';
import type { Result } from '@/shared/types/result';

import type { ImageForm } from '@/features/image/models/image.form';
import type { UploadedImage } from '@/features/image/models/uploaded-image';

const uploadImage = async (body: ImageForm): Promise<Result<UploadedImage>> => {
  const endpoint = '/image/upload/temp';

  const formData = new FormData();
  formData.append('image', body.image);

  return await bffFetcher<UploadedImage>({
    endpoint,
    method: 'POST',
    options: {
      body: formData,
    },
  });
};

export default uploadImage;
