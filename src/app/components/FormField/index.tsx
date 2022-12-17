import { TextField } from "@mui/material";
import { InfoOutlined as InfoOutlinedIcon } from "@mui/icons-material";
import React from "react";
import { Field } from "react-final-form";
import { FormUtil } from "@Utils/form.util";
import { REGEX } from "@Const";
import { preventCharacter } from "@Utils/other.util";

type Props = {
  label: string;
  name: string;
  placeholder: string;
  requiredMessage: string;
  otherRequiredMessage?: string;
  emailRequiredMessage?: string;
  pattern?: RegExp;
  infoIcon: boolean;
  fieldConfig?: React.ComponentProps<typeof TextField>;
  helperText?: React.ReactNode;
  type?: React.HTMLInputTypeAttribute;
};

const FormField: React.FC<Props> = ({
  label,
  name,
  placeholder,
  requiredMessage,
  otherRequiredMessage,
  emailRequiredMessage,
  pattern,
  infoIcon,
  fieldConfig = {},
  type,
}) => {
  const validateOpts: any[] = [];
  requiredMessage && validateOpts.push(FormUtil.Rule.required(requiredMessage));
  otherRequiredMessage &&
    validateOpts.push(
      FormUtil.Rule.pattern(pattern as RegExp, {
        errorMessage: otherRequiredMessage,
      })
    );
  emailRequiredMessage &&
    validateOpts.push(FormUtil.Rule.pattern(REGEX.EMAIL, { errorMessage: emailRequiredMessage }));
  const validateFn =
    validateOpts.length > 0 ? FormUtil.composeValidators(validateOpts) : () => undefined;

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
            {label} {infoIcon && <InfoOutlinedIcon style={{ marginLeft: "0.5rem" }} />}
          </label>
          <TextField
            {...input}
            {...rest}
            id={name}
            fullWidth
            placeholder={placeholder}
            className="form-text-field"
            inputProps={{ className: "input" }}
            variant="outlined"
            type={type}
            onKeyDown={(e) => {
              if (type === "number") preventCharacter(e);
            }}
            onChange={(e) => input.onChange(e.target.value)}
            helperText={meta.touched ? meta.error : ""}
            error={meta.error && meta.touched}
            {...fieldConfig}
          />
        </div>
      )}
    </Field>
  );
};

export default React.memo(FormField);
