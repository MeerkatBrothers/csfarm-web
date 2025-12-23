import { formatDateToYMD } from '@/shared/utils/formatter/date';

const HARVEST_QUERY_KEYS = {
  TODAY: (): string[] => ['insight', 'today', formatDateToYMD(new Date())],
  STATUS: (insightId: string): string[] => ['insight', 'status', insightId],
  DETAIL: (insightId: string): string[] => ['insight', 'detail', insightId],
  STORED: (page: number): string[] => ['insight', 'stored', page.toString()],
  HARVESTED: (page: number): string[] => ['insight', 'harvested', page.toString()],
} as const;

export default HARVEST_QUERY_KEYS;
