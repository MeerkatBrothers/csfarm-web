import { startOfYear, endOfYear, eachDayOfInterval } from "date-fns";

export const getAllDatesOfYear = (year: number = 2025): Date[] => {
  const start: Date = startOfYear(new Date(year, 0, 1));
  const end: Date = endOfYear(start);

  return eachDayOfInterval({ start, end });
};
