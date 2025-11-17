import { CONTENT_TYPE_JSON } from '@/lib/apis/constants/contentType';
import authBffHttpClient from '@/lib/apis/clients/authBffHttpClient';
import { type Result } from '@/lib/types/result';

import { type HarvestRequest } from '@/features/harvest/models/request/harvestRequest';

const harvestRepository = async (body: HarvestRequest): Promise<Result<null>> => {
  const endpoint = '/harvest';

  const result = await authBffHttpClient<null>({
    method: 'POST',
    endpoint,
    options: {
      headers: {
        'Content-type': CONTENT_TYPE_JSON,
      },
      body: JSON.stringify(body),
    },
  });

  return result;
};

export default harvestRepository;
