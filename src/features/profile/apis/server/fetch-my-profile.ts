import apiFetcher from '@/shared/apis/fetchers/api-fetcher';

import type { Profile } from '@/features/profile/models/profile';

const fetchMyProfile = async (accessToken: string): Promise<Profile> => {
  const endpoint = '/profile/my';

  return await apiFetcher<Profile>({
    endpoint,
    method: 'GET',
    token: accessToken,
  });
};

export default fetchMyProfile;
