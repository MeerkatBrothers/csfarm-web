import { CONTENT_TYPE_JSON } from '@/lib/apis/constants/contentType';
import authBffHttpClient from '@/lib/apis/clients/authBffHttpClient';
import { type Result } from '@/lib/types/result';

import { type ThreshRequest } from '@/features/thresh/models/request/threshRequest';

const threshRepository = async (body: ThreshRequest): Promise<Result<null>> => {
  const endpoint = '/thresh';

  const result = await authBffHttpClient<null>({
    method: 'POST',
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

export default threshRepository;
