import { useQuery } from '@tanstack/react-query';

import ResultError from '@/shared/errors/client/result-error';

import PROFILE_QUERY_KEYS from '@/features/profile/constants/query-key';
import getMyProfile from '@/features/profile/apis/bff/get-my-profile';
import type { Profile } from '@/features/profile/models/profile';

const useMyProfile = () => {
  return useQuery<Profile>({
    queryKey: PROFILE_QUERY_KEYS.MY,
    queryFn: async () => {
      const result = await getMyProfile();
      if (!result.ok) {
        throw new ResultError(result.statusCode, result.code);
      }

      return result.data;
    },
  });
};

export default useMyProfile;
