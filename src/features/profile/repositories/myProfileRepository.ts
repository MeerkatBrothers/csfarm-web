import authBffHttpClient from '@/lib/apis/clients/authBffHttpClient';
import { type Result } from '@/lib/types/result';

import { type MyProfileResponse } from '@/features/profile/models/response/myProfileResponse';

const myProfileRepository = async (): Promise<Result<MyProfileResponse>> => {
  const endpoint = '/profile/my';

  const result = await authBffHttpClient<MyProfileResponse>({
    method: 'GET',
    endpoint,
  });

  return result;
};

export default myProfileRepository;
