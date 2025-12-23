import { ClientErrorCode } from '@/shared/errors/client-error-code';
import ClientError from '@/shared/errors/client/client-error';

export default class InvalidFormError extends ClientError {
  constructor(code?: string) {
    super(code ?? ClientErrorCode.INVALID_FORM);

    this.name = 'InvalidFormError';
  }
}
