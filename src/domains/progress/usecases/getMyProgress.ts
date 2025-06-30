import { Result } from "@/lib/types/result";
import { validateOrThrow } from "@/lib/utils/zod";
import { formatDateToYMD } from "@/lib/utils/formatter/date";
import ResultError from "@/lib/errors/resultError";

import myProgressRepo from "@/domains/progress/repositories/myProgressRepo";
import { mapMyProgressResDtoToModel } from "@/domains/progress/mappers/myProgressMapper";
import { MyProgress, myProgressSchema } from "@/domains/progress/models/myProgress";
import { Progress } from "@/domains/progress/models/fragments/progress";
import { MyProgressResDto } from "@/domains/progress/dtos/request/myProgressResDto";

const getMyProgress = async (): Promise<Map<string, Progress>> => {
  const result: Result<MyProgressResDto> = await myProgressRepo();
  if (!result.ok) {
    throw new ResultError(result.message, result.statusCode);
  }

  const myProgress: MyProgress = mapMyProgressResDtoToModel(result.data);

  const validatedMyProgress: MyProgress = validateOrThrow(myProgressSchema, myProgress);

  const myProgressMap: Map<string, Progress> = new Map<string, Progress>();
  for (const progress of validatedMyProgress.progresses) {
    myProgressMap.set(formatDateToYMD(progress.date), progress);
  }

  return myProgressMap;
};

export default getMyProgress;
