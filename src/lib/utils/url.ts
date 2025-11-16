export const normalizeEndpoint = (endpoint: string): string => {
  return endpoint.replace(/^\/+/, '');
};
