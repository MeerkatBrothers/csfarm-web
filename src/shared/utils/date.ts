import { startOfYear, endOfYear, eachDayOfInterval } from 'date-fns';

export const getAllDatesOfYear = (year: number = 2025): Date[] => {
  const start = startOfYear(new Date(year, 0, 1));
  const end = endOfYear(start);

  return eachDayOfInterval({ start, end });
};
