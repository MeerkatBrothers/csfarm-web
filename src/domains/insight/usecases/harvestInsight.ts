"use server";

import { getAccessTokenFromCookie } from "@/lib/cookie/accessToken";
import UnauthorizedError from "@/lib/errors/http/unauthorizedError";

import fetchHarvestInsight from "@/domains/insight/repositories/fetchHarvestInsight";

const harvestInsight = async (insightId: number): Promise<void> => {
  const storedAccessToken: string | null = await getAccessTokenFromCookie();
  if (!storedAccessToken) {
    throw new UnauthorizedError();
  }

  await fetchHarvestInsight(insightId, storedAccessToken);
};

export default harvestInsight;
