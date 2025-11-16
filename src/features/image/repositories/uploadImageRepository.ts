import authBffHttpClient from '@/lib/apis/clients/authBffHttpClient';
import { type Result } from '@/lib/types/result';

import { type UploadImageRequest } from '@/features/image/models/request/uploadImageRequest';
import { type UploadImageResponse } from '@/features/image/models/response/uploadImageResponse';

const uploadImageRepository = async (
  body: UploadImageRequest,
): Promise<Result<UploadImageResponse>> => {
  const endpoint = '/image/upload';

  const formData = new FormData();
  formData.append('image', body.image);

  const result = await authBffHttpClient<UploadImageResponse>({
    method: 'POST',
    endpoint,
    options: {
      body: formData,
    },
  });

  return result;
};

export default uploadImageRepository;
