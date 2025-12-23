export const stringToNumber = (value: string | null, fallback: number): number => {
  if (value === null) return fallback;

  const parsed = Number(value);

  return !isNaN(parsed) ? parsed : fallback;
};
