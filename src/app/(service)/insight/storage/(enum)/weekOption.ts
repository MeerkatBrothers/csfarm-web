export const WEEK_OPTION = {
  THIS_WEEK: "이번주",
  LAST_WEEK: "1주전",
  TWO_WEEKS_AGO: "2주전",
  THREE_WEEKS_AGO: "3주전",
} as const;

export type WeekOption = (typeof WEEK_OPTION)[keyof typeof WEEK_OPTION];
