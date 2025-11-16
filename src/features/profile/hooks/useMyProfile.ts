import { useQuery } from '@tanstack/react-query';

import ResultError from '@/lib/errors/resultError';

import PROFILE_QUERY_KEYS from '@/features/profile/constants/queryKey';
import getMyProfile from '@/features/profile/usecases/getMyProfile';
import { type MyProfileResponse } from '@/features/profile/models/response/myProfileResponse';

const useMyProfile = () => {
  return useQuery<MyProfileResponse | null>({
    queryKey: PROFILE_QUERY_KEYS.MY,
    queryFn: async () => {
      try {
        return await getMyProfile();
      } catch (e) {
        if (e instanceof ResultError && e.statusCode === 401) {
          return null;
        }

        throw e;
      }
    },
  });
};

export default useMyProfile;
