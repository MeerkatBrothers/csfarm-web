import { formatDateToYMD } from "@/lib/utils/formatter/date";

const QUIZ_QUERY_KEYS = {
  TODAY: (): string[] => ["quiz", "today", formatDateToYMD(new Date())],
  STATUS: (quizId: number): string[] => ["quiz", "status", quizId.toString()],
};

export default QUIZ_QUERY_KEYS;
