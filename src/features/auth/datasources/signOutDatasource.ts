import apiHttpClient from '@/lib/apis/clients/apiHttpClient';

import { MEMBER_NOT_FOUND_ERROR } from '@/features/auth/constants/errorMessage';

const signOutDatasource = async (refreshToken: string): Promise<void> => {
  const endpoint = '/auth/sign-out';

  await apiHttpClient({
    method: 'DELETE',
    endpoint,
    errorMessages: {
      401: MEMBER_NOT_FOUND_ERROR,
    },
    token: refreshToken,
  });
};

export default signOutDatasource;
