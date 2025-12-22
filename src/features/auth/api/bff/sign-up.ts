import { CONTENT_TYPE_JSON } from '@/shared/apis/constants/content-type';
import bffFetcher from '@/shared/apis/fetchers/bff-fetcher';
import type { Result } from '@/shared/types/result';

import { type CredentialForm } from '@/features/auth/models/credential.form';

const signUp = async (body: CredentialForm): Promise<Result<null>> => {
  const endpoint = '/auth/sign-up';

  return await bffFetcher<null>({
    endpoint,
    method: 'POST',
    options: {
      headers: {
        'Content-type': CONTENT_TYPE_JSON,
      },
      body: JSON.stringify(body),
    },
  });
};

export default signUp;
