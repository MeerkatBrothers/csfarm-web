import { Result } from '@/lib/types/result';
import { buildProxyServerUrl } from '@/lib/utils/url';
import internalFetcher from '@/lib/apis/fetchers/internalFetcher';

import { TodayInsightResDto } from '@/features/insight/dtos/response/todayInsightResDto';

const todayInsightRepo = async (): Promise<Result<TodayInsightResDto>> => {
  const endpoint: string = 'insight/today';

  const result: Result<TodayInsightResDto> = await internalFetcher<TodayInsightResDto>({
    url: buildProxyServerUrl(endpoint),
    options: {
      method: 'GET',
    },
  });

  return result;
};

export default todayInsightRepo;
