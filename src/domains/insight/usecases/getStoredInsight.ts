import fetchStoredInsight from "@/domains/insight/repositories/fetchStoredInsight";
import { StoredInsight } from "@/domains/insight/models/storedInsight";

const getStoredInsight = async (): Promise<StoredInsight> => {
  const storedInsight: StoredInsight = await fetchStoredInsight();

  return storedInsight;
};

export default getStoredInsight;
