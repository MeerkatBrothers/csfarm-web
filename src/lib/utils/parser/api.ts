export const parseBearerToken = (request: Request): string | null => {
  const authorization: string | null = request.headers.get("Authorization");
  if (!authorization?.startsWith("Bearer ")) {
    return null;
  }

  return authorization.split(" ")[1] ?? null;
};

export const parseQueryParam = (url: URL, key: string): string | null => {
  return url.searchParams.get(key);
};

export const parsePathParam = (params: Record<string, string | undefined>, key: string): string | null => {
  const value: string | undefined = params[key];
  if (!value) {
    return null;
  }

  const trimmedValue: string = value.trim();

  return trimmedValue !== "" ? trimmedValue : null;
};
