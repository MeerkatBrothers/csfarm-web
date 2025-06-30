export default interface ApiResponse<T> {
  readonly statusCode: number;
  readonly message: string;
  readonly data: T;
}
