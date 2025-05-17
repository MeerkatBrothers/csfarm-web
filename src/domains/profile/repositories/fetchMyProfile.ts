import { validateOrThrow } from "@/lib/utils/zod";
import ApiResponse from "@/lib/models/apiResponse";

import myProfileApi from "@/domains/profile/datasources/myProfileApi";
import { mapMyProfileResDtoToModel } from "@/domains/profile/mappers/myProfileMapper";
import { MyProfile } from "@/domains/profile/models/myProfile";
import { MyProfileResDto, myProfileResDtoSchema } from "@/domains/profile/dtos/response/myProfileResDto";

const fetchMyProfile = async (): Promise<MyProfile> => {
  const apiResponse: ApiResponse<MyProfileResDto> = await myProfileApi();
  const data: MyProfileResDto = apiResponse.data;

  const validatedData: MyProfileResDto = validateOrThrow(myProfileResDtoSchema, data);

  const myProfile: MyProfile = mapMyProfileResDtoToModel(validatedData);

  return myProfile;
};

export default fetchMyProfile;
