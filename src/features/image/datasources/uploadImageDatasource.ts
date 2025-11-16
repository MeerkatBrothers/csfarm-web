import apiHttpClient from '@/lib/apis/clients/apiHttpClient';

import { type UploadImageResponse } from '@/features/image/models/response/uploadImageResponse';

const uploadImageDatasource = async (
  image: File,
  accessToken: string,
): Promise<UploadImageResponse> => {
  const endpoint = '/image/upload/temp';

  const formData = new FormData();
  formData.append('image', image);

  const response = await apiHttpClient<UploadImageResponse>({
    method: 'POST',
    endpoint,
    options: {
      body: formData,
    },
    token: accessToken,
  });

  return response;
};

export default uploadImageDatasource;
