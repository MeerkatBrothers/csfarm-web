import apiHttpClient from '@/lib/apis/clients/apiHttpClient';

import { type MyProfileResponse } from '@/features/profile/models/response/myProfileResponse';

const myProfileDatasource = async (accessToken: string): Promise<MyProfileResponse> => {
  const endpoint = '/profile/my';

  const response = await apiHttpClient<MyProfileResponse>({
    method: 'GET',
    endpoint,
    token: accessToken,
  });

  return response;
};

export default myProfileDatasource;
