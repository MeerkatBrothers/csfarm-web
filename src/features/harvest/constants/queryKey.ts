const HARVEST_QUERY_KEYS = {
  STATUS: (insightId: string): string[] => ['harvest', 'status', insightId],
  HARVESTED: ['harvest', 'harvested'],
};

export default HARVEST_QUERY_KEYS;
