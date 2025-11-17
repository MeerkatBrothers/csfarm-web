import authBffHttpClient from '@/lib/apis/clients/authBffHttpClient';
import { type Result } from '@/lib/types/result';

import { type ThreshStatusResponse } from '@/features/thresh/models/response/threshStatusResponse';

const threshStatusRepository = async (quizId: string): Promise<Result<ThreshStatusResponse>> => {
  const endpoint = `/thresh/status/${quizId}`;

  const result = await authBffHttpClient<ThreshStatusResponse>({
    method: 'GET',
    endpoint,
  });

  return result;
};

export default threshStatusRepository;
