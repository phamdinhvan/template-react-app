import React from "react";
import { UserIcon } from "../../components/Icons/UserIcon";
import { APP_ROUTES } from "../../constants/module";
import SkeletonPage from "../../containers/Example";
import { RouteProps } from "react-router-dom";

export const DEFAULT_COLOR = "#6C778D";
export const ACTIVE_COLOR = "#FFF";
export const DEFAULT_SIZE: [number, number] = [28, 28];

export type ModuleItem = {
  title: string;
  label: string;
  defaultIcon: React.ReactElement;
  activeIcon: React.ReactElement;
  path: string;
  subRoutes: Array<ModuleItem>;
  enabled: boolean;
};

const moduleList: ModuleItem[] = [
  {
    title: "test",
    label: "test",
    defaultIcon: <UserIcon color={DEFAULT_COLOR} size={DEFAULT_SIZE} viewBox={DEFAULT_SIZE} />,
    activeIcon: <UserIcon color={ACTIVE_COLOR} size={DEFAULT_SIZE} viewBox={DEFAULT_SIZE} />,
    path: APP_ROUTES.TEST,
    enabled: true,
    subRoutes: [],
  },
];

export const appRoutes: Array<RouteProps> = [
  {
    exact: true,
    path: APP_ROUTES.TEST,
    component: SkeletonPage,
  },
];

export default moduleList;
