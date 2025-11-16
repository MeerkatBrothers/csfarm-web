import { validateOrThrow } from '@/lib/utils/zod';
import ResultError from '@/lib/errors/resultError';

import updateProfileRepository from '@/features/profile/repositories/updateProfileRepository';
import { type UpdateProfileRequest } from '@/features/profile/models/request/updateProfileRequest';
import { profileFormSchema, type ProfileForm } from '@/features/profile/models/profileForm';

const updateProfile = async (profileForm: ProfileForm): Promise<void> => {
  const validatedProfileForm = validateOrThrow(profileFormSchema, profileForm);

  const body: UpdateProfileRequest = { profile: validatedProfileForm };

  const result = await updateProfileRepository(body);
  if (!result.ok) {
    throw new ResultError(result.statusCode, result.message);
  }
};

export default updateProfile;
