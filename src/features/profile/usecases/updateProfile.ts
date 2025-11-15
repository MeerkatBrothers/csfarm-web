import { Result } from '@/lib/types/result';
import { validateOrThrow } from '@/lib/utils/zod';
import ResultError from '@/lib/errors/resultError';

import updateProfileRepo from '@/features/profile/repositories/updateProfileRepo';
import { mapProfileFormToDto } from '@/features/profile/mappers/fragments/profileFormMapper';
import { ProfileForm } from '@/features/profile/models/fragments/profileForm';
import {
  UpdateProfileReqDto,
  updateProfileReqDtoSchema,
} from '@/features/profile/dtos/request/updateProfileReqDto';
import { ProfileFormDto } from '@/features/profile/dtos/fragments/profileFormDto';

const updateProfile = async (profileForm: ProfileForm): Promise<void> => {
  const profileFormDto: ProfileFormDto = mapProfileFormToDto(profileForm);

  const requestBody: UpdateProfileReqDto = { profile: profileFormDto };
  const validatedRequestBody: UpdateProfileReqDto = validateOrThrow(
    updateProfileReqDtoSchema,
    requestBody,
  );

  const result: Result<null> = await updateProfileRepo(validatedRequestBody);
  if (!result.ok) {
    throw new ResultError(result.message, result.statusCode);
  }
};

export default updateProfile;
