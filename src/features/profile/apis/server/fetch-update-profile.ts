import { CONTENT_TYPE_JSON } from '@/shared/apis/constants/content-type';
import apiFetcher from '@/shared/apis/fetchers/api-fetcher';

import { type ProfileForm } from '@/features/profile/models/profile.form';

const fetchUpdateProfile = async (body: ProfileForm, accessToken: string): Promise<void> => {
  const endpoint = '/profile';

  await apiFetcher({
    endpoint,
    method: 'PATCH',
    options: {
      headers: {
        'Content-type': CONTENT_TYPE_JSON,
      },
      body: JSON.stringify(body),
    },
    token: accessToken,
  });
};

export default fetchUpdateProfile;
