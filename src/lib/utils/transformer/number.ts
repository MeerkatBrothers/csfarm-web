export const stringToNumber = (value: string | null): number | null => {
  if (value === null) {
    return null;
  }

  const parsed = Number(value);

  return !isNaN(parsed) ? parsed : null;
};
