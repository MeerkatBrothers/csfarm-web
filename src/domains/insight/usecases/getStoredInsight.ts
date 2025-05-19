import { Result, success, failed } from "@/lib/types/result";

import fetchStoredInsight from "@/domains/insight/repositories/fetchStoredInsight";
import { StoredInsight } from "@/domains/insight/models/storedInsight";

const getStoredInsight = async (): Promise<Result<StoredInsight>> => {
  try {
    const storedInsight: StoredInsight = await fetchStoredInsight();

    return success(storedInsight);
  } catch (e) {
    return failed(e);
  }
};

export default getStoredInsight;
