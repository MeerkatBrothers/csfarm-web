import { Result, success, failed } from "@/lib/types/result";

import fetchInsightDetail from "@/domains/insight/repositories/fetchInsightDetail";
import { InsightDetail } from "@/domains/insight/models/insightDetail";

const getInsightDetail = async (insightId: number): Promise<Result<InsightDetail>> => {
  try {
    const insightDetail: InsightDetail = await fetchInsightDetail(insightId);

    return success(insightDetail);
  } catch (e) {
    return failed(e);
  }
};

export default getInsightDetail;
