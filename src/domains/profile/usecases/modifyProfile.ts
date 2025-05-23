import { Result } from "@/lib/types/result";
import { validateOrThrow } from "@/lib/utils/zod";
import ResultError from "@/lib/errors/resultError";

import modifyProfileRepo from "@/domains/profile/repositories/modifyProfileRepo";
import { mapProfileFormToDto } from "@/domains/profile/mappers/fragments/profileFormMapper";
import { ProfileForm } from "@/domains/profile/models/fragments/profileForm";
import { ModifyProfileReqDto, modifyProfileReqDtoSchema } from "@/domains/profile/dtos/request/modifyProfileReqDto";
import { ProfileFormDto } from "@/domains/profile/dtos/fragments/profileFormDto";

const modifyProfile = async (profileForm: ProfileForm): Promise<void> => {
  const profileFormDto: ProfileFormDto = mapProfileFormToDto(profileForm);

  const requestBody: ModifyProfileReqDto = { profile: profileFormDto };
  const validatedRequestBody: ModifyProfileReqDto = validateOrThrow(modifyProfileReqDtoSchema, requestBody);

  const result: Result<null> = await modifyProfileRepo(validatedRequestBody);
  if (!result.ok) {
    throw new ResultError(result.message, result.statusCode);
  }
};

export default modifyProfile;
