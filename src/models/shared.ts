export type WithChildren<T = {}> = T & { children?: React.ReactNode };
export type BaseEntity = {
  id: string;
  deleteAt?: Nullable<string>;
};
export type Nullable<T> = T | null;
export type ValueOf<T> = T[keyof T];
export type CountryCode = "VN" | "EN" | "SA";
export type Generalize<
  U extends string,
  T extends CountryCode
> = T extends `${infer Head}${infer Tail}` ? `${U}${Head}${Lowercase<Tail>}` : U;

export type PaginateFetchReducer<T> = {
  page: number;
  totalPages: number;
  limit: number;
  totalRecords: number;
  data: T[];
  fetching: boolean;
  errorMessage: string;
  loading?: boolean;
};
