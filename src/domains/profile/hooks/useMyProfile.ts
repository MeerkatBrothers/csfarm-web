"use client";

import { useQuery } from "@tanstack/react-query";

import PROFILE_QUERY_KEYS from "@/domains/profile/constants/queryKey";
import getMyProfile from "@/domains/profile/usecases/getMyProfile";
import { MyProfile } from "@/domains/profile/models/myProfile";

const useMyProfile = () => {
  return useQuery<MyProfile>({
    queryKey: PROFILE_QUERY_KEYS.MY,
    queryFn: async () => {
      const myProfile: MyProfile = await getMyProfile();

      return myProfile;
    },
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 30,
  });
};

export default useMyProfile;
