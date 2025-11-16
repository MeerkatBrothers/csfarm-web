import apiHttpClient from '@/lib/apis/clients/apiHttpClient';

import { type MyProfileResponse } from '@/features/profile/models/response/myProfileResponse';

const myProfileDatasource = async (accessToken: string): Promise<MyProfileResponse> => {
  const endpoint = '/profile/my';

  const result = await apiHttpClient<MyProfileResponse>({
    method: 'GET',
    endpoint,
    token: accessToken,
  });

  return result;
};

export default myProfileDatasource;
