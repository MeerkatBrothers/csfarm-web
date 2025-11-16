import { CONTENT_TYPE_JSON } from '@/lib/apis/constants/contentType';
import bffHttpClient from '@/lib/apis/clients/bffHttpClient';
import { type Result } from '@/lib/types/result';

import { type SignUpRequest } from '@/features/auth/models/request/signUpRequest';

const signUpRepo = async (body: SignUpRequest): Promise<Result<null>> => {
  const endpoint = '/auth/sign-up';

  const result = await bffHttpClient<null>({
    method: 'POST',
    endpoint,
    options: {
      headers: {
        'Content-type': CONTENT_TYPE_JSON,
      },
      body: JSON.stringify(body),
      credentials: 'same-origin',
    },
  });

  return result;
};

export default signUpRepo;
