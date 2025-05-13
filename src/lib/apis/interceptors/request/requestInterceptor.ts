import { RequestConfig } from "@/lib/apis/types/config";

export default interface RequestInterceptor {
  (config: RequestConfig): RequestConfig | Promise<RequestConfig>;
}
