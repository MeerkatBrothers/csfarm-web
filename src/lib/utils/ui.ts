import { getErrorMessage } from '@/lib/utils/error';

export const alertError = (error: Error): void => {
  const message = getErrorMessage(error);

  alert(message);
};
