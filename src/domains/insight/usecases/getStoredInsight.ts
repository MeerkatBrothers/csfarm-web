import fetchStoredInsight from "@/domains/insight/repositories/fetchStoredInsight";
import { StoredInsight } from "@/domains/insight/models/storedInsight";

const getStoredInsight = async (): Promise<StoredInsight> => {
  const fetchedData: StoredInsight = await fetchStoredInsight();

  return fetchedData;
};

export default getStoredInsight;
