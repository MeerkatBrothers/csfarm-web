"use server";

import fetchHarvestedInsight from "@/domains/insight/repositories/fetchHarvestedInsight";
import { HarvestedInsight } from "@/domains/insight/models/harvestedInsight";

const getHarvestedInsight = async (page: number, size: number = 10): Promise<HarvestedInsight> => {
  const harvestedInsight: HarvestedInsight = await fetchHarvestedInsight(page, size);

  return harvestedInsight;
};

export default getHarvestedInsight;
