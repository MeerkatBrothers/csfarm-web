const INSIGHT_QUERY_KEYS = {
  DETAIL: (insightId: string): string[] => ['insight', 'detail', insightId],
  STORED: ['insight', 'stored'],
} as const;

export default INSIGHT_QUERY_KEYS;
