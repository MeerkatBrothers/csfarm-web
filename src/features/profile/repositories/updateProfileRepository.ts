import { CONTENT_TYPE_JSON } from '@/lib/apis/constants/contentType';
import authBffHttpClient from '@/lib/apis/clients/authBffHttpClient';
import { type Result } from '@/lib/types/result';

import { UpdateProfileRequest } from '@/features/profile/models/request/updateProfileRequest';

const updateProfileRepository = async (body: UpdateProfileRequest): Promise<Result<null>> => {
  const endpoint = '/profile';

  const result = await authBffHttpClient<null>({
    method: 'PATCH',
    endpoint,
    options: {
      headers: {
        'Content-type': CONTENT_TYPE_JSON,
      },
      body: JSON.stringify(body),
    },
  });

  return result;
};

export default updateProfileRepository;
