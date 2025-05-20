import { RequestConfig } from "@/lib/apis/types/config";

/**
 * @deprecated
 */
export default interface ResponseInterceptor {
  (config: RequestConfig, response: Response): Response | Promise<Response>;
}
