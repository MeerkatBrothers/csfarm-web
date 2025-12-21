export interface BaseFetcherOptions {
  endpoint: string;
  method: 'GET' | 'POST' | 'DELETE' | 'PATCH' | 'PUT';
  options?: RequestInit;
}
