import apiClient from "@/lib/apis/apiClient";
import { getServerApiUrl } from "@/lib/utils/api";

import { HarvestInsightReqDto } from "@/domains/insight/dtos/request/harvestInsightReqDto";

const harvestInsightApi = async (body: HarvestInsightReqDto, accessToken: string): Promise<void> => {
  const endpoint: string = "insight/harvest";

  await apiClient({
    url: getServerApiUrl(endpoint),
    options: {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(body),
    },
  });
};

export default harvestInsightApi;
