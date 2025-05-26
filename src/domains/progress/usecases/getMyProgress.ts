import { Result } from "@/lib/types/result";
import { validateOrThrow } from "@/lib/utils/zod";
import ResultError from "@/lib/errors/resultError";

import myProgressRepo from "@/domains/progress/repositories/myProgressRepo";
import { mapMyProgressResDtoToModel } from "@/domains/progress/mappers/myProgressMapper";
import { MyProgress, myProgressSchema } from "@/domains/progress/models/myProgress";
import { MyProgressResDto } from "@/domains/progress/dtos/request/myProgressResDto";

const getMyProgress = async (): Promise<MyProgress> => {
  const result: Result<MyProgressResDto> = await myProgressRepo();
  if (!result.ok) {
    throw new ResultError(result.message, result.statusCode);
  }

  const myProgress: MyProgress = mapMyProgressResDtoToModel(result.data);

  const validatedMyProgress: MyProgress = validateOrThrow(myProgressSchema, myProgress);

  return validatedMyProgress;
};

export default getMyProgress;
