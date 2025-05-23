import { buildApiServerUrl } from "@/lib/utils/url";
import { CONTENT_TYPE_JSON } from "@/lib/apis/constants/contentType";
import externalFetcher from "@/lib/apis/fetchers/externalFetcher";

import { ThreshQuizReqDto } from "@/domains/quiz/dtos/request/threshQuizReqDto";

const threshQuizSource = async (body: ThreshQuizReqDto, accessToken: string): Promise<void> => {
  const endpoint: string = "quiz/thresh";

  await externalFetcher({
    url: buildApiServerUrl(endpoint),
    options: {
      method: "PATCH",
      headers: {
        "Content-type": CONTENT_TYPE_JSON,
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(body),
    },
    errorMessage: {
      400: "타작에 실패했어요. 다른 선택지를 한 번 더 살펴보는 건 어떨까요?",
      409: "이미 타작한 수확물이에요.",
    },
  });
};

export default threshQuizSource;
