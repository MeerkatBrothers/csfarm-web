import { validateOrThrow } from "@/lib/utils/zod";

import modifyProfileApi from "@/domains/profile/datasources/modifyProfileApi";
import { mapProfileFormToDto } from "@/domains/profile/mappers/fragments/profileFormMapper";
import { ProfileForm } from "@/domains/profile/models/fragments/profileForm";
import { ModifyProfileReqDto, modifyProfileReqDtoSchema } from "@/domains/profile/dtos/request/modifyProfileReqDto";
import { ProfileFormDto } from "@/domains/profile/dtos/fragments/profileFormDto";

const fetchModifyProfile = async (profileForm: ProfileForm): Promise<void> => {
  const profileFormDto: ProfileFormDto = mapProfileFormToDto(profileForm);
  const requestBody: ModifyProfileReqDto = { profile: profileFormDto };

  const validatedBody: ModifyProfileReqDto = validateOrThrow(modifyProfileReqDtoSchema, requestBody);

  await modifyProfileApi(validatedBody);
};

export default fetchModifyProfile;
