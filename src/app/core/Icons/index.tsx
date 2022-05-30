import React from "react";

export type IconComponent = {
  color: string;
  size: [number, number];
  viewBox: [number, number];
  style?: React.CSSProperties;
};

export const IconBase: React.FC<IconComponent> = (props) => {
  return (
    <svg
      width={props.size[0]}
      height={props.size[1]}
      viewBox={`0 0 ${props.viewBox[0]} ${props.viewBox[1]}`}
      style={props.style}
      fill="none">
      {props.children}
    </svg>
  );
};
