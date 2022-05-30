import React from "react";
import { Clear as ClearIcon } from "@mui/icons-material";
import "./index.scss";

type P_Props = {
  title: React.ReactNode;
  onClose?: () => void;
};

const SimpleModalHeader: React.FC<P_Props> = ({ title, onClose }) => {
  return (
    <div className="app-form-header">
      <div className="title">{title}</div>
      <button type="button" className="close" onClick={onClose}>
        <span className="sr-only"></span>
        <span aria-hidden className="close-icon">
          <ClearIcon style={{ fontSize: "2.2rem" }} />
        </span>
      </button>
    </div>
  );
};

export default SimpleModalHeader;
