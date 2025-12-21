import ApiError from '@/shared/errors/api/api-error';

export default class NotFoundError extends ApiError {
  constructor(code: string) {
    super(404, code);

    this.name = 'NotFoundError';
  }
}
