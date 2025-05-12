export default interface ResponseInterceptor {
  (request: Request, response: Response): Response | Promise<Response>;
}
