import React from "react";
import clsx from "clsx";
import { ModuleItem } from "./routes";
import "./SubNavbar.scss";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

export type Props = {
  routes?: ModuleItem[];
};

const SubNavbar: React.FC<Props> = (props) => {
  const history = useHistory();
  const isActiveRoute = (pathname: string): boolean => {
    return history.location.pathname === pathname;
  };
  if (props.routes?.length === 0) return <div></div>;
  return (
    <div className="wrapper">
      <div className={"sub-route-menu"}>
        {props.routes?.map(({ title, defaultIcon, activeIcon, path }) => {
          const isActive = isActiveRoute(path);
          const classes = clsx("nav-item", path === history.location.pathname && "tab-green-style");
          return (
            <Link key={path} to={path}>
              <div className={classes}>
                <div className="icon">{isActive ? activeIcon : defaultIcon}</div>
                <span className="title">{title}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SubNavbar;
