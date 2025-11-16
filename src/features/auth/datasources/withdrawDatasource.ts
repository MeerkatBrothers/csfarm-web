import apiHttpClient from '@/lib/apis/clients/apiHttpClient';

import { MEMBER_NOT_FOUND_ERROR } from '@/features/auth/constants/errorMessage';

const withdrawDatasource = async (accessToken: string): Promise<void> => {
  const endpoint = '/auth/withdraw';

  await apiHttpClient({
    method: 'DELETE',
    endpoint,
    errorMessages: {
      401: MEMBER_NOT_FOUND_ERROR,
    },
    token: accessToken,
  });
};

export default withdrawDatasource;
