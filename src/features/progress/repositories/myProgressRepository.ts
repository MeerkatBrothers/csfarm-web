import authBffHttpClient from '@/lib/apis/clients/authBffHttpClient';
import { type Result } from '@/lib/types/result';

import { type MyProgressResponse } from '@/features/progress/models/response/myProgressResponse';

const myProgressRepository = async (): Promise<Result<MyProgressResponse>> => {
  const endpoint = '/progress/my';

  const result = await authBffHttpClient<MyProgressResponse>({
    method: 'GET',
    endpoint,
  });

  return result;
};

export default myProgressRepository;
