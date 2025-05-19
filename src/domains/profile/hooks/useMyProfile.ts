"use client";

import { useQuery } from "@tanstack/react-query";

import { Result } from "@/lib/types/result";
import ResultError from "@/lib/errors/resultError";

import PROFILE_QUERY_KEYS from "@/domains/profile/constants/queryKey";
import getMyProfile from "@/domains/profile/usecases/getMyProfile";
import { MyProfile } from "@/domains/profile/models/myProfile";

const useMyProfile = () => {
  return useQuery<MyProfile>({
    queryKey: PROFILE_QUERY_KEYS.MY,
    queryFn: async () => {
      const myProfileResult: Result<MyProfile> = await getMyProfile();
      if (!myProfileResult.ok) {
        throw new ResultError(myProfileResult.message, myProfileResult.statusCode);
      }

      return myProfileResult.data;
    },
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 30,
  });
};

export default useMyProfile;
