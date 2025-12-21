export const parseQueryParam = (url: URL, key: string): string | null => {
  return url.searchParams.get(key);
};

export const parsePathParam = (
  params: Record<string, string | undefined>,
  key: string,
): string | null => {
  const value = params[key];
  if (!value) return null;

  const trimmedValue = value.trim();

  return trimmedValue !== '' ? trimmedValue : null;
};
