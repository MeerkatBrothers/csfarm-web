export default abstract class ClientError extends Error {
  readonly code: string;

  constructor(code: string) {
    super(code);

    this.name = 'ClientError';
    this.code = code;
  }
}
