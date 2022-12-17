import React from "react";
import { InfoOutlined as InfoOutlinedIcon } from "@mui/icons-material";
import { Field } from "react-final-form";
import CustomSwitch from "@Components/Switch";

type Props = {
  label: string;
  name: string;
  stateMessages: [string, string];
};

const FormSwitch: React.FC<Props> = ({ label, name, stateMessages }) => {
  return (
    <Field
      type="checkbox"
      name={name}
      subscription={{
        touched: true,
        error: true,
        value: true,
      }}>
      {({ input }) => (
        <div className="form-item">
          <label htmlFor={name} className="form-label">
            {label} <InfoOutlinedIcon style={{ marginLeft: "0.5rem" }} />
          </label>
          <div className="flex" style={{ alignItems: "center" }}>
            <CustomSwitch checked={!!input.checked} onChange={input.onChange} />
            <div>{input.checked ? stateMessages[0] : stateMessages[1]}</div>
          </div>
        </div>
      )}
    </Field>
  );
};

export default React.memo(FormSwitch);
