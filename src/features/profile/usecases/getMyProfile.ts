import { Result } from '@/lib/types/result';
import { validateOrThrow } from '@/lib/utils/zod';
import ResultError from '@/lib/errors/resultError';

import myProfileRepo from '@/features/profile/repositories/myProfileRepo';
import { mapMyProfileResDtoToModel } from '@/features/profile/mappers/myProfileMapper';
import { MyProfile, myProfileSchema } from '@/features/profile/models/myProfile';
import { MyProfileResDto } from '@/features/profile/dtos/response/myProfileResDto';

const getMyProfile = async (): Promise<MyProfile> => {
  const result: Result<MyProfileResDto> = await myProfileRepo();
  if (!result.ok) {
    throw new ResultError(result.message, result.statusCode);
  }

  const myProfile: MyProfile = mapMyProfileResDtoToModel(result.data);

  const validatedMyProfile: MyProfile = validateOrThrow(myProfileSchema, myProfile);

  return validatedMyProfile;
};

export default getMyProfile;
