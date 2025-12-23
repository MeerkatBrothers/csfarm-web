import { formatDateToYMD } from '@/lib/utils/formatter/date';

const THRESH_QUERY_KEYS = {
  TODAY: (): string[] => ['quiz', 'today', formatDateToYMD(new Date())],
  STATUS: (quizId: number): string[] => ['quiz', 'status', quizId.toString()],
};

export default THRESH_QUERY_KEYS;
