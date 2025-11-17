import { CONTENT_TYPE_JSON } from '@/lib/apis/constants/contentType';
import apiHttpClient from '@/lib/apis/clients/apiHttpClient';

import {
  INVALID_QUIZ_CHOICE_ERROR,
  ALREADY_THRESHED_ERROR,
} from '@/features/thresh/constants/errorMessage';
import { type ThreshRequest } from '@/features/thresh/models/request/threshRequest';

const threshDatasource = async (body: ThreshRequest, accessToken: string): Promise<void> => {
  const endpoint = '/thresh';

  await apiHttpClient<null>({
    method: 'POST',
    endpoint,
    options: {
      headers: {
        'Content-type': CONTENT_TYPE_JSON,
      },
      body: JSON.stringify(body),
    },
    token: accessToken,
    errorMessages: {
      400: INVALID_QUIZ_CHOICE_ERROR,
      409: ALREADY_THRESHED_ERROR,
    },
  });
};

export default threshDatasource;
