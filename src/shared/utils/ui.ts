import { toast } from 'react-toastify';

import { getErrorMessage } from '@/shared/utils/error';

export const toastError = (error: Error): void => {
  const message = getErrorMessage(error);

  toast(message);
};
