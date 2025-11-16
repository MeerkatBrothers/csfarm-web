import apiHttpClient from '@/lib/apis/clients/apiHttpClient';

import { AUTH_EXPIRED_ERROR } from '@/features/auth/constants/errorMessage';
import { type ReissueTokenResponse } from '@/features/auth/models/response/reissueTokenResponse';

const reissueTokenDatasource = async (refreshToken: string): Promise<ReissueTokenResponse> => {
  const endpoint = '/auth/reissue-token';

  const result = await apiHttpClient<ReissueTokenResponse>({
    method: 'POST',
    endpoint,
    errorMessages: {
      401: AUTH_EXPIRED_ERROR,
    },
    token: refreshToken,
  });

  return result;
};

export default reissueTokenDatasource;
