"use server";

import { validateOrThrow } from "@/lib/utils/zod";

import fetchModifyProfile from "@/domains/profile/repositories/fetchModifyProfile";
import { ProfileForm, profileFormSchema } from "@/domains/profile/models/fragments/profileForm";

const modifyProfile = async (profileForm: ProfileForm): Promise<void> => {
  const validatedProfileForm: ProfileForm = validateOrThrow(profileFormSchema, profileForm);

  await fetchModifyProfile(validatedProfileForm);
};

export default modifyProfile;
