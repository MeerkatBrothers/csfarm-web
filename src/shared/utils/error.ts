import { ZodError } from 'zod';

import { ERROR_MESSAGE } from '@/shared/errors/error-message';
import ResultError from '@/shared/errors/client/result-error';
import { ClientErrorCode } from '@/shared/errors/client-error-code';

export const getErrorMessage = (error: Error): string => {
  const defaultErrorMessage = ERROR_MESSAGE[ClientErrorCode.UNKNOWN];

  if (error instanceof ZodError) {
    const issue = error.issues?.[0];
    const code = issue?.message;

    return ERROR_MESSAGE[code] || ERROR_MESSAGE[ClientErrorCode.INVALID_FORM];
  }

  if (error instanceof ResultError) {
    const code = error.code;

    return ERROR_MESSAGE[code] || defaultErrorMessage;
  }

  return defaultErrorMessage;
};
