import { ClientErrorCode } from '@/shared/errors/client-error-code';
import ClientError from '@/shared/errors/client/client-error';

export default class InvalidParamError extends ClientError {
  constructor() {
    super(ClientErrorCode.INVALID_PARAM);

    this.name = 'InvalidParamError';
  }
}
