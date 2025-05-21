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
