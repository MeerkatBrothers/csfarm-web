import { CONTENT_TYPE_JSON } from '@/shared/apis/constants/content-type';
import bffFetcher from '@/shared/apis/fetchers/bff-fetcher';
import type { Result } from '@/shared/types/result';

import { type ProfileForm } from '@/features/profile/models/profile.form';

const updateProfile = async (body: ProfileForm): Promise<Result<null>> => {
  const endpoint = '/profile';

  return await bffFetcher<null>({
    endpoint,
    method: 'PATCH',
    options: {
      headers: {
        'Content-type': CONTENT_TYPE_JSON,
      },
      body: JSON.stringify(body),
    },
  });
};

export default updateProfile;
