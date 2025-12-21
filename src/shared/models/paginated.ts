export interface Paginated<T> {
  readonly page: number;
  readonly size: number;
  readonly hasNext: boolean;
  readonly data: T;
}
