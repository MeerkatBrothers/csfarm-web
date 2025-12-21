export const normalizeOrigin = (origin: string): string => {
  return origin.replace(/\/+$/, '');
};

export const normalizeEndpoint = (endpoint: string): string => {
  return endpoint.replace(/^\/+/, '');
};
