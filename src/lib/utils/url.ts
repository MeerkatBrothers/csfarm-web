export const buildApiServerUrl = (endpoint: string): string => {
  return `${process.env.API_URL}/${endpoint}`;
};

export const buildProxyServerUrl = (endpoint: string): string => {
  return `/api/${endpoint}`;
};
