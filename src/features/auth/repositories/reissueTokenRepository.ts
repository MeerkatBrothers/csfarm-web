import bffHttpClient from '@/lib/apis/clients/bffHttpClient';
import { type Result } from '@/lib/types/result';

const reissueTokenRepository = async (): Promise<Result<null>> => {
  const endpoint = '/auth/reissue-token';

  const result = await bffHttpClient<null>({
    method: 'POST',
    endpoint,
    options: {
      credentials: 'same-origin',
    },
  });

  return result;
};

export default reissueTokenRepository;
