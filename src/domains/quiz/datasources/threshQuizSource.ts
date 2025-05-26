import { buildApiServerUrl } from "@/lib/utils/url";
import { CONTENT_TYPE_JSON } from "@/lib/apis/constants/contentType";
import externalFetcher from "@/lib/apis/fetchers/externalFetcher";

import { INVALID_QUIZ_CHOICE_ERROR, ALREADY_THRESHED_QUIZ_ERROR } from "@/domains/quiz/constants/errorMessage";
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
      400: INVALID_QUIZ_CHOICE_ERROR,
      409: ALREADY_THRESHED_QUIZ_ERROR,
    },
  });
};

export default threshQuizSource;
