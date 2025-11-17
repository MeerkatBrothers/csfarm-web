import apiHttpClient from '@/lib/apis/clients/apiHttpClient';

import { type ThreshStatusResponse } from '@/features/thresh/models/response/threshStatusResponse';

const threshStatusDatasource = async (
  quizId: string,
  accessToken: string,
): Promise<ThreshStatusResponse> => {
  const endpoint = `/thresh/status/${quizId}`;

  const response = await apiHttpClient<ThreshStatusResponse>({
    method: 'GET',
    endpoint,
    token: accessToken,
  });

  return response;
};

export default threshStatusDatasource;
