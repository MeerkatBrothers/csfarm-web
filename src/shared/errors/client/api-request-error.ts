import { ClientErrorCode } from '@/shared/errors/client-error-code';
import ClientError from '@/shared/errors/client/client-error';

export default class ApiRequestError extends ClientError {
  constructor() {
    super(ClientErrorCode.API_REQUEST_FAILED);

    this.name = 'ApiRequestError';
  }
}
