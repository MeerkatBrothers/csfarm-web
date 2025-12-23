import apiFetcher from '@/shared/apis/fetchers/api-fetcher';

import type { UploadedImage } from '@/features/image/models/uploaded-image';

const fetchUploadImage = async (image: File, accessToken: string): Promise<UploadedImage> => {
  const endpoint = '/image/upload/temp';

  const formData = new FormData();
  formData.append('image', image);

  return await apiFetcher<UploadedImage>({
    endpoint,
    method: 'POST',
    options: {
      body: formData,
    },
    token: accessToken,
  });
};

export default fetchUploadImage;
