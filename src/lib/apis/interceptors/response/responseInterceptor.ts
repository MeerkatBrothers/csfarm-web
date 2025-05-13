import { RequestConfig } from "@/lib/apis/types/config";

export default interface ResponseInterceptor {
  (config: RequestConfig, response: Response): Response | Promise<Response>;
}
