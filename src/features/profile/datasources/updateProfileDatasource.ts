import { CONTENT_TYPE_JSON } from '@/lib/apis/constants/contentType';
import apiHttpClient from '@/lib/apis/clients/apiHttpClient';

import { type UpdateProfileRequest } from '@/features/profile/models/request/updateProfileRequest';

const updateProfileDatasource = async (
  body: UpdateProfileRequest,
  accessToken: string,
): Promise<void> => {
  const endpoint = '/profile';

  await apiHttpClient({
    method: 'PATCH',
    endpoint,
    options: {
      headers: {
        'Content-type': CONTENT_TYPE_JSON,
      },
      body: JSON.stringify(body),
    },
    token: accessToken,
  });
};

export default updateProfileDatasource;
