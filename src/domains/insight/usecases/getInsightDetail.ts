import fetchInsightDetail from "@/domains/insight/repositories/fetchInsightDetail";
import { InsightDetail } from "@/domains/insight/models/insightDetail";

const getInsightDetail = async (insightId: number): Promise<InsightDetail> => {
  const fetchedData: InsightDetail = await fetchInsightDetail(insightId);

  return fetchedData;
};

export default getInsightDetail;
