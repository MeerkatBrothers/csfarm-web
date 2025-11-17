export interface Paginated<T> {
  page: number;
  size: number;
  hasNext: boolean;
  data: T;
}
