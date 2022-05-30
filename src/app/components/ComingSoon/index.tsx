import React from "react";
import Update from "../../../assets/images/Update.png";

const ComingSoon: React.FC = () => {
  return (
    <div
      className="coming-soon"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        background: "#F0F3F8",
        height: "100vh",
        width: "100%",
        objectFit: "contain",
      }}>
      <img src={Update} alt="comingsoon" />
      <div style={{ fontSize: "4.4rem", fontWeight: "bold" }}>Tính năng vẫn đang được cập nhật</div>
    </div>
  );
};

export default ComingSoon;
