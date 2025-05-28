import { useQuery } from "@tanstack/react-query";

import PROFILE_QUERY_KEYS from "@/domains/profile/constants/queryKey";
import getMyProfile from "@/domains/profile/usecases/getMyProfile";
import { MyProfile } from "@/domains/profile/models/myProfile";

const useMyProfile = () => {
  return useQuery<MyProfile | null>({
    queryKey: PROFILE_QUERY_KEYS.MY,
    queryFn: async () => {
      try {
        const myProfile: MyProfile = await getMyProfile();

        return myProfile;
      } catch (e) {
        return null;
      }
    },
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 30,
    retry: false,
  });
};

export default useMyProfile;
