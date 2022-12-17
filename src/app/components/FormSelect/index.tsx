import React from "react";
import { Field } from "react-final-form";
import { InfoOutlined as InfoOutlinedIcon } from "@mui/icons-material";
import { MenuItem, Select } from "@mui/material";
import { FormUtil } from "@Utils/form.util";

type Props = {
  label: string;
  name: string;
  requiredMessage: string;
  fieldConfig?: object;
  selectItems: { label: React.ReactNode; value: any }[];
  placeholder?: string;
};

const FormSelect: React.FC<Props> = ({
  label,
  name,
  requiredMessage,
  selectItems,
  fieldConfig = {},
  placeholder,
}) => {
  const validateFn = requiredMessage ? FormUtil.Rule.required(requiredMessage) : () => undefined;
  return (
    <Field
      name={name}
      validate={validateFn}
      subscription={{
        touched: true,
        error: true,
        value: true,
      }}>
      {({ input, meta, ...rest }) => (
        <div className="form-item">
          <label htmlFor={name} className="form-label">
            {label} <InfoOutlinedIcon style={{ marginLeft: "0.5rem" }} />
          </label>
          <Select
            {...input}
            {...rest}
            id={name}
            fullWidth
            className="form-select-field"
            inputProps={{ className: "input" }}
            variant="outlined"
            onChange={(e) => input.onChange(e.target.value)}
            error={meta.error && meta.touched}
            {...fieldConfig}
            displayEmpty={Boolean(placeholder)}
            renderValue={
              Boolean(placeholder) && !input.value ? () => <span>{placeholder}</span> : undefined
            }>
            {selectItems.map(({ label, value }, index) => (
              <MenuItem key={index} value={value}>
                {label}
              </MenuItem>
            ))}
          </Select>
        </div>
      )}
    </Field>
  );
};

export default React.memo(FormSelect);
