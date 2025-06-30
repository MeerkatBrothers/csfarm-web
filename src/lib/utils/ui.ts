import { getErrorMessage } from "@/lib/utils/error";

export const alertError = (error: Error): void => {
  const message: string = getErrorMessage(error);

  alert(message);
};
