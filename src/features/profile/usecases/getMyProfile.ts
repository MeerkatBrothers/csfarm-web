import ResultError from '@/lib/errors/resultError';

import myProfileRepository from '@/features/profile/repositories/myProfileRepository';
import { type MyProfileResponse } from '@/features/profile/models/response/myProfileResponse';

const getMyProfile = async (): Promise<MyProfileResponse> => {
  const result = await myProfileRepository();
  if (!result.ok) {
    throw new ResultError(result.statusCode, result.message);
  }

  const myProfile = result.data;

  return myProfile;
};

export default getMyProfile;
