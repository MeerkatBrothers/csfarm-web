"use server";

import { getAccessTokenFromCookie } from "@/lib/cookie/accessToken";
import UnauthorizedError from "@/lib/errors/http/unauthorizedError";

import fetchHarvestedInsight from "@/domains/insight/repositories/fetchHarvestedInsight";
import { HarvestedInsight } from "@/domains/insight/models/harvestedInsight";

const getHarvestedInsight = async (page: number, size: number = 10): Promise<HarvestedInsight> => {
  const storedAccessToken: string | null = await getAccessTokenFromCookie();
  if (!storedAccessToken) {
    throw new UnauthorizedError();
  }

  const fetchedData: HarvestedInsight = await fetchHarvestedInsight(page, size, storedAccessToken);

  return fetchedData;
};

export default getHarvestedInsight;
