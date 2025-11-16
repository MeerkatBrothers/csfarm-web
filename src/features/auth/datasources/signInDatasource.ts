import { CONTENT_TYPE_JSON } from '@/lib/apis/constants/contentType';
import apiHttpClient from '@/lib/apis/clients/apiHttpClient';

import { MEMBER_NOT_FOUND_ERROR } from '@/features/auth/constants/errorMessage';
import { type SignInRequest } from '@/features/auth/models/request/signInRequest';
import { type SignInResponse } from '@/features/auth/models/response/signInResponse';

const signInDatasource = async (body: SignInRequest): Promise<SignInResponse> => {
  const endpoint = '/auth/sign-in';

  const result = await apiHttpClient<SignInResponse>({
    method: 'POST',
    endpoint,
    options: {
      headers: {
        'Content-type': CONTENT_TYPE_JSON,
      },
      body: JSON.stringify(body),
    },
    errorMessages: {
      401: MEMBER_NOT_FOUND_ERROR,
    },
  });

  return result;
};

export default signInDatasource;
