export const buildApiServerUrl = (endpoint: string): string => {
  return `${process.env.API_URL}/${endpoint}`;
};
