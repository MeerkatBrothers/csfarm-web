export const getServerApiUrl = (endpoint: string): string => {
  return `${process.env.API_URL}/${endpoint}`;
};
