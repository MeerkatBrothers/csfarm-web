import { format } from "date-fns-tz";

export const formatDateToYMD = (date: Date, timeZone: string = "Asia/Seoul"): string => {
  return format(date, "yyyy-MM-dd", { timeZone });
};
