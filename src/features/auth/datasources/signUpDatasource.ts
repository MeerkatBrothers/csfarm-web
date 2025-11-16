import { CONTENT_TYPE_JSON } from '@/lib/apis/constants/contentType';
import apiHttpClient from '@/lib/apis/clients/apiHttpClient';

import { MEMBER_CONFLICT_ERROR } from '@/features/auth/constants/errorMessage';
import { type SignUpRequest } from '@/features/auth/models/request/signUpRequest';
import { type SignUpResponse } from '@/features/auth/models/response/signUpResponse';

const signUpDatasource = async (body: SignUpRequest): Promise<SignUpResponse> => {
  const endpoint = '/auth/sign-up';

  const result = await apiHttpClient<SignUpResponse>({
    method: 'POST',
    endpoint,
    options: {
      headers: {
        'Content-type': CONTENT_TYPE_JSON,
      },
      body: JSON.stringify(body),
    },
    errorMessages: {
      409: MEMBER_CONFLICT_ERROR,
    },
  });

  return result;
};

export default signUpDatasource;
