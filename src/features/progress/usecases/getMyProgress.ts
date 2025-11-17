import { formatDateToYMD } from '@/lib/utils/formatter/date';
import ResultError from '@/lib/errors/resultError';

import myProgressRepository from '@/features/progress/repositories/myProgressRepository';
import { type Progress } from '@/features/progress/models/progress';

const getMyProgress = async (): Promise<Map<string, Progress>> => {
  const result = await myProgressRepository();
  if (!result.ok) {
    throw new ResultError(result.statusCode, result.message);
  }

  const myProgress = result.data;

  const myProgressMap = new Map<string, Progress>();
  for (const progress of myProgress.progresses) {
    myProgressMap.set(formatDateToYMD(progress.date), progress);
  }

  return myProgressMap;
};

export default getMyProgress;
