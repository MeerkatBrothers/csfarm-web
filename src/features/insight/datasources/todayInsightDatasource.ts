import apiHttpClient from '@/lib/apis/clients/apiHttpClient';

import { TODAY_INSIGHT_NOT_FOUND_ERROR } from '@/features/insight/constants/errorMessage';
import { type TodayInsightResponse } from '@/features/insight/models/response/todayInsightResponse';

const todayInsightDatasource = async (): Promise<TodayInsightResponse> => {
  const endpoint = '/insight/today';

  const response = await apiHttpClient<TodayInsightResponse>({
    method: 'GET',
    endpoint,
    errorMessages: {
      404: TODAY_INSIGHT_NOT_FOUND_ERROR,
    },
  });

  return response;
};

export default todayInsightDatasource;
