"use server";

import fetchMyProfile from "@/domains/profile/repositories/fetchMyProfile";
import { MyProfile } from "@/domains/profile/models/myProfile";

const getMyProfile = async (): Promise<MyProfile> => {
  const myProfile: MyProfile = await fetchMyProfile();

  return myProfile;
};

export default getMyProfile;
