import bffFetcher from '@/shared/apis/fetchers/bff-fetcher';
import type { Result } from '@/shared/types/result';

import type { Profile } from '@/features/profile/models/profile';

const getMyProfile = async (): Promise<Result<Profile>> => {
  const endpoint = '/profile/my';

  return await bffFetcher<Profile>({
    endpoint,
    method: 'GET',
  });
};

export default getMyProfile;
