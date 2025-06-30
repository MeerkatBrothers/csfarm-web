import { buildApiServerUrl } from "@/lib/utils/url";
import externalFetcher from "@/lib/apis/fetchers/externalFetcher";
import ApiResponse from "@/lib/models/apiResponse";

import { MyProgressResDto } from "@/domains/progress/dtos/request/myProgressResDto";

const myProgressSource = async (accessToken: string): Promise<ApiResponse<MyProgressResDto>> => {
  const endpoint: string = "progress/my";

  const apiResponse: ApiResponse<MyProgressResDto> = await externalFetcher<ApiResponse<MyProgressResDto>>({
    url: buildApiServerUrl(endpoint),
    options: {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  });

  return apiResponse;
};

export default myProgressSource;
