"use server";

import { Result, success, failed } from "@/lib/types/result";

import fetchInsightStatus from "@/domains/insight/repositories/fetchInsightStatus";
import { InsightStatus } from "@/domains/insight/models/insightStatus";

const getInsightStatus = async (insightId: number): Promise<Result<InsightStatus>> => {
  try {
    const insightStatus: InsightStatus = await fetchInsightStatus(insightId);

    return success(insightStatus);
  } catch (e) {
    return failed(e);
  }
};

export default getInsightStatus;
