import fetchTodayInsight from "@/domains/insight/repositories/fetchTodayInsight";
import { TodayInsight } from "@/domains/insight/models/todayInsight";

const getTodayInsight = async (): Promise<TodayInsight> => {
  const fetchedData: TodayInsight = await fetchTodayInsight();

  return fetchedData;
};

export default getTodayInsight;
