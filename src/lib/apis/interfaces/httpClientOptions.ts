import { type HttpErrorMessage } from '@/lib/apis/interfaces/httpErrorMessage';

export interface HttpClientOptions {
  method: 'GET' | 'POST' | 'DELETE' | 'PATCH' | 'PUT';
  endpoint: string;
  options?: RequestInit;
  errorMessages?: HttpErrorMessage;
}
