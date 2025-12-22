import { CONTENT_TYPE_JSON } from '@/shared/apis/constants/content-type';
import apiFetcher from '@/shared/apis/fetchers/api-fetcher';

import type { CredentialForm } from '@/features/auth/models/credential.form';
import type { Certification } from '@/features/auth/models/certification';

const fetchSignUp = async (body: CredentialForm): Promise<Certification> => {
  const endpoint = '/auth/sign-up';

  return await apiFetcher<Certification>({
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

export default fetchSignUp;
