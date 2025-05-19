"use server";

import { Result, success, failed } from "@/lib/types/result";

import fetchHarvestedInsight from "@/domains/insight/repositories/fetchHarvestedInsight";
import { HarvestedInsight } from "@/domains/insight/models/harvestedInsight";

const getHarvestedInsight = async (page: number, size: number = 10): Promise<Result<HarvestedInsight>> => {
  try {
    const harvestedInsight: HarvestedInsight = await fetchHarvestedInsight(page, size);

    return success(harvestedInsight);
  } catch (e) {
    return failed(e);
  }
};

export default getHarvestedInsight;
