"use server";

import fetchHarvestInsight from "@/domains/insight/repositories/fetchHarvestInsight";

const harvestInsight = async (insightId: number): Promise<void> => {
  await fetchHarvestInsight(insightId);
};

export default harvestInsight;
