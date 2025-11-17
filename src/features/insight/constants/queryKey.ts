import { formatDateToYMD } from '@/lib/utils/formatter/date';

const INSIGHT_QUERY_KEYS = {
  TODAY: (): string[] => ['insight', 'today', formatDateToYMD(new Date())],
  STORED: ['insight', 'stored'],
  DETAIL: (insightId: string): string[] => ['insight', 'detail', insightId],
};

export default INSIGHT_QUERY_KEYS;
