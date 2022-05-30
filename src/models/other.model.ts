export type TCb = {
  success?: (data?: any) => void;
  fail?: (data?: any) => void;
  error?: (data?: any) => void;
};

export type IconModel = {
  color: string;
  size: [number, number]; // mang kich thuoc x,y (width, height)
  viewBox?: [number, number]; // mang kich thuoc x,y (width, height)
  className?: string;
  style?: React.CSSProperties;
  options?: {
    color: string;
    backgroundColor: string;
  };
};

export type PaginationQueryModel = {
  page: number;
  limit: number;
  source?: string;
};

export type PaginationModel = {
  page: number;
  limit: number;
};

export type PaginationQueryModelPartner = {
  pageNumber: number;
  pageLimit: number;
};

export type ActionState = {
  type: string;
  payload: {
    data: any;
    complete?: () => void;
    error?: (err: any) => void;
  };
};

export type FetchingPaginationDataModel<T> = {
  page: number;
  totalPages: number;
  limit: number;
  totalRecords: number;
  data: T[];
  loading: boolean;
};

export type FetchingDataModel<T> = {
  data: T;
  loading: boolean;
};

export enum FORM_MODE {
  CREATE,
  EDIT,
  VIEW,
}

/**
 * dùng cho <ImageUpload />
 */
export type UploadedImageModel = {
  id?: string;
  file: any;
  fileStr: any;
  alt?: string;
};

export type FormUploadImageModel = {
  id: string;
  src: string;
  alt?: string;
};

export const Action = {
  FETCH: "FETCH",
  SUCCESS: "FETCH_SUCCESS",
  FAILED: "FETCH_FAILED",
  RESET: "FETCH_RESET",
  LOGOUT: "LOGOUT",
} as const;

export type ValueOf<T> = T[keyof T];

export type FetchAction = {
  type: ValueOf<typeof Action>;
  payload: any;
};

export type FetchReducer<T> = {
  data: T[];
  fetching: boolean;
  failMessage: string;
};

export enum ManageRegistration {
  REFUSE = "refuse",
  NOT_APPROVED = "not approved",
  APPROVED = "approved",
}

export enum Direction {
  UP = "UP",
  DOWN = "DOWN",
  LEFT = "LEFT",
  RIGHT = "RIGHT",
}
