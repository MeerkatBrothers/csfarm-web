import bffHttpClient from '@/lib/apis/clients/bffHttpClient';
import { type Result } from '@/lib/types/result';

const signOutRepository = async (): Promise<Result<null>> => {
  const endpoint = '/auth/sign-out';

  const result = await bffHttpClient<null>({
    method: 'DELETE',
    endpoint,
    options: {
      credentials: 'same-origin',
    },
  });

  return result;
};

export default signOutRepository;
