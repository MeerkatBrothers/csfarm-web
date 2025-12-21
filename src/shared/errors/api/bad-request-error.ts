import ApiError from '@/shared/errors/api/api-error';

export default class BadRequestError extends ApiError {
  constructor(code: string) {
    super(400, code);

    this.name = 'BadRequestError';
  }
}
