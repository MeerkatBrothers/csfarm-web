export default interface RequestInterceptor {
  (request: Request): Request | Promise<Request>;
}
