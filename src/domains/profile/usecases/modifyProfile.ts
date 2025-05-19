"use server";

import { Result, success, failed } from "@/lib/types/result";
import { validateOrThrow } from "@/lib/utils/zod";

import fetchModifyProfile from "@/domains/profile/repositories/fetchModifyProfile";
import { ProfileForm, profileFormSchema } from "@/domains/profile/models/fragments/profileForm";

const modifyProfile = async (profileForm: ProfileForm): Promise<Result<null>> => {
  try {
    const validatedProfileForm: ProfileForm = validateOrThrow(profileFormSchema, profileForm);

    await fetchModifyProfile(validatedProfileForm);

    return success(null);
  } catch (e) {
    return failed(e);
  }
};

export default modifyProfile;
