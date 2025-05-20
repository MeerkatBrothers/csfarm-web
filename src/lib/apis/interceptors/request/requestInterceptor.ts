import { RequestConfig } from "@/lib/apis/types/config";

/**
 * @deprecated
 */
export default interface RequestInterceptor {
  (config: RequestConfig): RequestConfig | Promise<RequestConfig>;
}
