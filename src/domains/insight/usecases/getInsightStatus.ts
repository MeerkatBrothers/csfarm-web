"use server";

import { getAccessTokenFromCookie } from "@/lib/cookie/accessToken";

import fetchInsightStatus from "@/domains/insight/repositories/fetchInsightStatus";
import { InsightStatus } from "@/domains/insight/models/insightStatus";

const getInsightStatus = async (insightId: number): Promise<InsightStatus> => {
  const storedAccessToken: string | null = await getAccessTokenFromCookie();

  const fetchedData: InsightStatus = await fetchInsightStatus(insightId, storedAccessToken);

  return fetchedData;
};

export default getInsightStatus;
