const INSIGHT_QUERY_KEYS = {
  HARVESTED: ["insight", "harvested"],
  STATUS: (insightId: number): string[] => ["insight", "status", insightId.toString()],
};

export default INSIGHT_QUERY_KEYS;
