export const getErrorMessage = (error: unknown): string => {
  const message: string = error instanceof Error ? error.message : "알 수 없는 오류가 발생했습니다.";

  return message;
};
