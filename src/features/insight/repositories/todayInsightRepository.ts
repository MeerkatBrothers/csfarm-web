import bffHttpClient from '@/lib/apis/clients/bffHttpClient';
import { type Result } from '@/lib/types/result';

import { type TodayInsightResponse } from '@/features/insight/models/response/todayInsightResponse';

const todayInsightRepo = async (): Promise<Result<TodayInsightResponse>> => {
  const endpoint = '/insight/today';

  const result = await bffHttpClient<TodayInsightResponse>({
    method: 'GET',
    endpoint,
  });

  return result;
};

export default todayInsightRepo;
