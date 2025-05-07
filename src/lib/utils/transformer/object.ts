export const objectValuesToTuple = <T extends Record<string, string>>(
  object: T
): [T[keyof T], ...T[keyof T][]] => {
  return Object.values(object) as [T[keyof T], ...T[keyof T][]];
};
