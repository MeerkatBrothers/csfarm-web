"use server";

import { Result, success, failed } from "@/lib/types/result";

import fetchHarvestInsight from "@/domains/insight/repositories/fetchHarvestInsight";

const harvestInsight = async (insightId: number): Promise<Result<null>> => {
  try {
    await fetchHarvestInsight(insightId);

    return success(null);
  } catch (e) {
    return failed(e);
  }
};

export default harvestInsight;
