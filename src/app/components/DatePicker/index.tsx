import React from "react";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { CalendarMonth as CalendarMonthIcon } from "@mui/icons-material";
import { TextField } from "@mui/material";
import { Dayjs } from "dayjs";
import localeVN from "dayjs/locale/vi";
import "./index.scss";

type P_Props = {
  onChange: (value: any) => void;
  value: Dayjs | null;
};

const FHCalendar: React.FC<P_Props> = (props) => {
  return (
    <div className="date-picker">
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={localeVN}>
        <DesktopDatePicker
          inputFormat="DD/MM/YYYY"
          value={props.value}
          onChange={props.onChange}
          renderInput={(params) => (
            <TextField
              {...params}
              sx={{
                ".MuiInputBase-input": { fontSize: "1.6rem" },
              }}
              fullWidth
              className="form-text-field"
            />
          )}
          // components={{
          //   OpenPickerIcon: CalendarMonthIcon,
          // }}
        />
      </LocalizationProvider>
    </div>
  );
};

export default FHCalendar;
