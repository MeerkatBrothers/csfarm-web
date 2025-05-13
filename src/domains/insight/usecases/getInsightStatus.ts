"use server";

import fetchInsightStatus from "@/domains/insight/repositories/fetchInsightStatus";
import { InsightStatus } from "@/domains/insight/models/insightStatus";

const getInsightStatus = async (insightId: number): Promise<InsightStatus> => {
  const insightStatus: InsightStatus = await fetchInsightStatus(insightId);

  return insightStatus;
};

export default getInsightStatus;
