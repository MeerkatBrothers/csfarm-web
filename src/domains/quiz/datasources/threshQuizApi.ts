import { CONTENT_TYPE_JSON } from "@/lib/apis/constants/contentType";
import { buildApiServerUrl } from "@/lib/utils/url";
import fetcher from "@/lib/apis/fetcher";
import withAccessTokenInterceptor from "@/lib/apis/interceptors/request/withAccessTokenInterceptor";
import reissueTokenInterceptor from "@/lib/apis/interceptors/response/reissueTokenInterceptor";

import { ThreshQuizReqDto } from "@/domains/quiz/dtos/request/threshQuizReqDto";

const threshQuizApi = async (body: ThreshQuizReqDto): Promise<void> => {
  const endpoint: string = "quiz/thresh";

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
    errorMessage: {
      400: "타작에 실패했어요. 다른 선택지를 한 번 더 살펴보는 건 어떨까요?",
      409: "이미 타작한 수확물이에요.",
    },
  });
};

export default threshQuizApi;
