import fetchTodayInsight from "@/domains/insight/repositories/fetchTodayInsight";
import { TodayInsight } from "@/domains/insight/models/todayInsight";

const getTodayInsight = async (): Promise<TodayInsight> => {
  const todayInsight: TodayInsight = await fetchTodayInsight();

  return todayInsight;
};

export default getTodayInsight;
