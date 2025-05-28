import { formatDateToYMD } from "@/lib/utils/formatter/date";

const INSIGHT_QUERY_KEYS = {
  TODAY: (): string[] => ["insight", "today", formatDateToYMD(new Date())],
  STATUS: (insightId: number): string[] => ["insight", "status", insightId.toString()],
  STORAGED: (): string[] => ["insight", "storaged", formatDateToYMD(new Date())],
  DETAIL: (insightId: number): string[] => ["insight", "detail", insightId.toString()],
  HARVESTED: ["insight", "harvested"],
};

export default INSIGHT_QUERY_KEYS;
