import { buildApiServerUrl } from "@/lib/utils/url";
import externalFetcher from "@/lib/apis/fetchers/externalFetcher";
import ApiResponse from "@/lib/models/apiResponse";

import { StoredInsightResDto } from "@/domains/insight/dtos/response/storedInsightResDto";

const storedInsightSource = async (): Promise<ApiResponse<StoredInsightResDto>> => {
  const endpoint: string = "insight/storage";

  const apiResponse: ApiResponse<StoredInsightResDto> = await externalFetcher<ApiResponse<StoredInsightResDto>>({
    url: buildApiServerUrl(endpoint),
    options: {
      method: "GET",
    },
  });

  return apiResponse;
};

export default storedInsightSource;
