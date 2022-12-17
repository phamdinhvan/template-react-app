import { InfoOutlined as InfoOutlinedIcon } from "@mui/icons-material";

export const FormUIUtil = {
  renderFormItem,
};

function renderFormItem(label: any, value: any, withoutIcon: boolean = false) {
  const icon = !withoutIcon ? <InfoOutlinedIcon style={{ marginLeft: "0.5rem" }} /> : "";
  return (
    <div className="form-item">
      <div className="form-label">
        {label} {icon}
      </div>
      {value}
    </div>
  );
}
