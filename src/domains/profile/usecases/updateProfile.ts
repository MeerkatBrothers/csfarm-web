import { Result } from "@/lib/types/result";
import { validateOrThrow } from "@/lib/utils/zod";
import ResultError from "@/lib/errors/resultError";

import updateProfileRepo from "@/domains/profile/repositories/updateProfileRepo";
import { mapProfileFormToDto } from "@/domains/profile/mappers/fragments/profileFormMapper";
import { ProfileForm } from "@/domains/profile/models/fragments/profileForm";
import { UpdateProfileReqDto, updateProfileReqDtoSchema } from "@/domains/profile/dtos/request/updateProfileReqDto";
import { ProfileFormDto } from "@/domains/profile/dtos/fragments/profileFormDto";

const updateProfile = async (profileForm: ProfileForm): Promise<void> => {
  const profileFormDto: ProfileFormDto = mapProfileFormToDto(profileForm);

  const requestBody: UpdateProfileReqDto = { profile: profileFormDto };
  const validatedRequestBody: UpdateProfileReqDto = validateOrThrow(updateProfileReqDtoSchema, requestBody);

  const result: Result<null> = await updateProfileRepo(validatedRequestBody);
  if (!result.ok) {
    throw new ResultError(result.message, result.statusCode);
  }
};

export default updateProfile;
