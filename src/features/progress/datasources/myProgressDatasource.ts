import apiHttpClient from '@/lib/apis/clients/apiHttpClient';

import { type MyProgressResponse } from '@/features/progress/models/response/myProgressResponse';

const myProgressDatasource = async (accessToken: string): Promise<MyProgressResponse> => {
  const endpoint = '/progress/my';

  const response = await apiHttpClient<MyProgressResponse>({
    method: 'GET',
    endpoint,
    token: accessToken,
  });

  return response;
};

export default myProgressDatasource;
