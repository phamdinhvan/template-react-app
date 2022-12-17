import React from "react";
import "./index.scss";

export type P_Props = {
  img?: string;
  text?: string;
  title?: string;
};

const EmptyList: React.FC<P_Props> = (props) => {
  return (
    <div className="empty">
      <img
        style={{ height: "24rem", width: "17rem", marginTop: "20vh" }}
        src={props.img}
        alt="img-empty"
      />
      {props.title && <div className="title">{props.title}</div>}
      <div className="text">{props.text}</div>
    </div>
  );
};

export default EmptyList;
