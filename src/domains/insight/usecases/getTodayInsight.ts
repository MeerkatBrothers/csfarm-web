import { Result, success, failed } from "@/lib/types/result";

import fetchTodayInsight from "@/domains/insight/repositories/fetchTodayInsight";
import { TodayInsight } from "@/domains/insight/models/todayInsight";

const getTodayInsight = async (): Promise<Result<TodayInsight>> => {
  try {
    const todayInsight: TodayInsight = await fetchTodayInsight();

    return success(todayInsight);
  } catch (e) {
    return failed(e);
  }
};

export default getTodayInsight;
