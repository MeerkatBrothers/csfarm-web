"use server";

import { getAccessTokenFromCookie } from "@/lib/cookie/accessToken";

import fetchTodayInsight from "@/domains/insight/repositories/fetchTodayInsight";
import { TodayInsight } from "@/domains/insight/models/todayInsight";

const getTodayInsight = async (): Promise<TodayInsight> => {
  const storedAccessToken: string | null = await getAccessTokenFromCookie();

  const fetchedData: TodayInsight = await fetchTodayInsight(storedAccessToken);

  return fetchedData;
};

export default getTodayInsight;
