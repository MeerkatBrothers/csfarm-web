import authBffHttpClient from '@/lib/apis/clients/authBffHttpClient';
import { type Result } from '@/lib/types/result';

import { type TodayQuizResponse } from '@/features/quiz/models/response/todayQuizResponse';

const todayQuizRepository = async (): Promise<Result<TodayQuizResponse>> => {
  const endpoint = '/quiz/today';

  const result = await authBffHttpClient<TodayQuizResponse>({
    method: 'GET',
    endpoint,
  });

  return result;
};

export default todayQuizRepository;
