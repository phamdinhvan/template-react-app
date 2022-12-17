import React from "react";
import clsx from "clsx";
import loading from "@Assets/gif/Loading.gif";
import "./index.scss";

export type P_Props = {
  className?: string;
  style?: React.CSSProperties;
};

const Loading: React.FC<P_Props> = (props) => {
  const classes = clsx({
    "loading-comp": true,
    [props.className || ""]: Boolean(props.className),
  });

  return (
    <div className={classes} style={props.style}>
      <img src={loading} alt="Loading..." />
    </div>
  );
};

export default Loading;
