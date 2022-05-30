import React from "react";
// import SimpleModalHeader from "@Components/SimpleModalHeader";
// import Loading from "@Components/Loading";
import "./index.scss";

const SkeletonPage: React.FC = () => {
  return (
    <div className="skeleton-page">
      {/* <SimpleModalHeader title={<Loading />} /> */}
      <div className="content">Example content</div>
      <div>test</div>
      <div className="skeleton-footer">
        footer
        {/* <Loading style={{ marginBottom: "2rem" }} /> */}
      </div>
    </div>
  );
};

export default SkeletonPage;
