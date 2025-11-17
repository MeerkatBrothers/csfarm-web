import apiHttpClient from '@/lib/apis/clients/apiHttpClient';

import { TODAY_QUIZ_NOT_FOUND_ERROR } from '@/features/quiz/constants/errorMessage';
import { type TodayQuizResponse } from '@/features/quiz/models/response/todayQuizResponse';

const todayQuizDatasource = async (accessToken: string): Promise<TodayQuizResponse> => {
  const endpoint = '/quiz/today';

  const response = await apiHttpClient<TodayQuizResponse>({
    method: 'GET',
    endpoint,
    errorMessages: {
      404: TODAY_QUIZ_NOT_FOUND_ERROR,
    },
    token: accessToken,
  });

  return response;
};

export default todayQuizDatasource;
