import { formatDateToYMD } from "@/lib/utils/formatter/date";

const INSIGHT_TAG_KEYS = {
  TODAY: (): string[] => ["insight", "today", formatDateToYMD(new Date())],
  STORAGED: (): string[] => ["insight", "storaged", formatDateToYMD(new Date())],
  DETAIL: (insightId: number): string[] => ["insight", "detail", insightId.toString()],
};

export default INSIGHT_TAG_KEYS;
