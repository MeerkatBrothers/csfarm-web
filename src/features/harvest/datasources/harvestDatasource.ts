import { CONTENT_TYPE_JSON } from '@/lib/apis/constants/contentType';
import apiHttpClient from '@/lib/apis/clients/apiHttpClient';

import { ALREADY_HARVESTED_ERROR } from '@/features/harvest/constants/errorMessage';
import { type HarvestRequest } from '@/features/harvest/models/request/harvestRequest';

const harvestDatasource = async (body: HarvestRequest, accessToken: string): Promise<void> => {
  const endpoint = '/harvest';

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
      409: ALREADY_HARVESTED_ERROR,
    },
  });
};

export default harvestDatasource;
