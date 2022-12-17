import Loading from "@Components/Loading";
import React from "react";
import SimpleModalHeader from "../SimpleModalHeader";
import "./index.scss";

const SkeletonPage: React.FC = () => {
  return (
    <div className="skeleton-page">
      <SimpleModalHeader title={<Loading />} />
      <div className="content"></div>
      <div className="skeleton-footer">
        <Loading style={{ marginBottom: "2rem" }} />
      </div>
    </div>
  );
};

export default React.memo(SkeletonPage);
