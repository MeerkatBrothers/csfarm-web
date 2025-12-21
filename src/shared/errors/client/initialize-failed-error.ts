import { ClientErrorCode } from '@/shared/errors/client-error-code';
import ClientError from '@/shared/errors/client/client-error';

export default class InitializeFailedError extends ClientError {
  constructor() {
    super(ClientErrorCode.INITIALIZE_FAILED);

    this.name = 'InitializeFailedError';
  }
}
