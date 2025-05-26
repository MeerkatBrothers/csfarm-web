import { buildApiServerUrl } from "@/lib/utils/url";
import externalFetcher from "@/lib/apis/fetchers/externalFetcher";
import ApiResponse from "@/lib/models/apiResponse";

import { MyProfileResDto } from "@/domains/profile/dtos/response/myProfileResDto";

const myProfileSource = async (accessToken: string): Promise<ApiResponse<MyProfileResDto>> => {
  const endpoint: string = "profile/my";

  const apiResponse: ApiResponse<MyProfileResDto> = await externalFetcher<ApiResponse<MyProfileResDto>>({
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

export default myProfileSource;
