const HARVEST_QUERY_KEYS = {
  STATUS: (insightId: string): string[] => ['harvest', 'status', insightId],
  HARVESTED: ['harvest', 'harvested'],
} as const;

export default HARVEST_QUERY_KEYS;
