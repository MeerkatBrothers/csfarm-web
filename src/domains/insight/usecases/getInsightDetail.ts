import fetchInsightDetail from "@/domains/insight/repositories/fetchInsightDetail";
import { InsightDetail } from "@/domains/insight/models/insightDetail";

const getInsightDetail = async (insightId: number): Promise<InsightDetail> => {
  const insightDetail: InsightDetail = await fetchInsightDetail(insightId);

  return insightDetail;
};

export default getInsightDetail;
