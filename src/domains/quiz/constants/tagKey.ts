import { formatDateToYMD } from "@/lib/utils/formatter/date";

const QUIZ_TAG_KEYS = {
  TODAY: (): string[] => ["quiz", "today", formatDateToYMD(new Date())],
};

export default QUIZ_TAG_KEYS;
