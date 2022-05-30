export enum AppNotifications {
  SUCCESS = "success",
  ERROR = "error",
  WARNING = "warning",
  INFO = "info",
}

export type NotiModel = {
  type: AppNotifications;
  message: string;
};

export type AppNotiModel = {
  id: string;
} & NotiModel;

export declare module AppState {
  export type AppNotifications = {
    list: AppNotiModel[];
  };

  export type Authentication = {
    loading: boolean;
    data: {
      token: string;
      refreshToken: string | null;
      moduleFeatures: any[];
    } | null;
  };
}
