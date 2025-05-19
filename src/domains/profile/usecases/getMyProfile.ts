"use server";

import { Result, success, failed } from "@/lib/types/result";

import fetchMyProfile from "@/domains/profile/repositories/fetchMyProfile";
import { MyProfile } from "@/domains/profile/models/myProfile";

const getMyProfile = async (): Promise<Result<MyProfile>> => {
  try {
    const myProfile: MyProfile = await fetchMyProfile();

    return success(myProfile);
  } catch (e) {
    return failed(e);
  }
};

export default getMyProfile;
