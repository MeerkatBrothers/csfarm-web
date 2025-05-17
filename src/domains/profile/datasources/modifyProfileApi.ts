import { CONTENT_TYPE_JSON } from "@/lib/apis/constants/contentType";
import { buildApiServerUrl } from "@/lib/utils/url";
import fetcher from "@/lib/apis/fetcher";
import withAccessTokenInterceptor from "@/lib/apis/interceptors/request/withAccessTokenInterceptor";
import reissueTokenInterceptor from "@/lib/apis/interceptors/response/reissueTokenInterceptor";

import { ModifyProfileReqDto } from "@/domains/profile/dtos/request/modifyProfileReqDto";

const modifyProfileApi = async (body: ModifyProfileReqDto): Promise<void> => {
  const endpoint: string = "profile";

  await fetcher({
    config: {
      url: buildApiServerUrl(endpoint),
      options: {
        method: "PATCH",
        headers: {
          "Content-type": CONTENT_TYPE_JSON,
        },
        body: JSON.stringify(body),
      },
    },
    requestInterceptors: [withAccessTokenInterceptor],
    responseInterceptors: [reissueTokenInterceptor],
  });
};

export default modifyProfileApi;
