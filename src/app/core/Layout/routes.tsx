import React from "react";
import { UserIcon } from "@Components/Icons/UserIcon";
import { APP_ROUTES } from "@Const/module";
import { RouteProps } from "react-router-dom";
import SkeletonPage from "@Containers/Example";

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
    title: "Mom know mom sad",
    label: "Mom know mom sad",
    defaultIcon: <UserIcon color={DEFAULT_COLOR} size={DEFAULT_SIZE} viewBox={DEFAULT_SIZE} />,
    activeIcon: <UserIcon color={ACTIVE_COLOR} size={DEFAULT_SIZE} viewBox={DEFAULT_SIZE} />,
    path: APP_ROUTES.MNMS,
    enabled: true,
    subRoutes: [],
  },
];

export const appRoutes: Array<RouteProps> = [
  {
    exact: true,
    path: APP_ROUTES.MNMS,
    component: SkeletonPage,
  },
];

export default moduleList;
