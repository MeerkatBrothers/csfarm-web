import { validateOrThrow } from "@/lib/utils/zod";
import ApiResponse from "@/lib/models/apiResponse";

import myProgressApi from "@/domains/progress/datasources/myProgressApi";
import { mapMyProgressResDtoToModel } from "@/domains/progress/mappers/myProgressMapper";
import { MyProgress } from "@/domains/progress/models/myProgress";
import { MyProgressResDto, myProgressResDtoSchema } from "@/domains/progress/dtos/request/myProgressResDto";

const fetchMyProgress = async (): Promise<MyProgress> => {
  const apiResponse: ApiResponse<MyProgressResDto> = await myProgressApi();
  const data: MyProgressResDto = apiResponse.data;

  const validatedData: MyProgressResDto = validateOrThrow(myProgressResDtoSchema, data);

  const myProgress: MyProgress = mapMyProgressResDtoToModel(validatedData);

  return myProgress;
};

export default fetchMyProgress;
