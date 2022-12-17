import React, { useState } from "react";
import { Remove as RemoveIcon, CalendarMonth as CalendarMonthIcon } from "@mui/icons-material";
import "react-dates/initialize";
import { DateRangePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import "./index.scss";
import { Moment } from "moment";
import "moment/locale/vi";

type P_Props = {
  startDate: any;
  endDate: any;
  onChangeDate: (value: any[]) => void;
  font?: string;
  borderRadius?: any;
  color?: string;
};

const RangePicker: React.FC<P_Props> = ({
  startDate,
  endDate,
  onChangeDate,
  borderRadius,
  font,
  color,
}) => {
  const [value, setValue] = useState<{
    startDate: Moment;
    endDate: Moment;
  }>({
    startDate: startDate,
    endDate: endDate || "",
  });

  const [focusedInput, setFocusedInput] = useState(null);

  const handleDatesChange = ({ startDate, endDate }: any) => {
    setValue(() => ({
      startDate,
      endDate,
    }));
    onChangeDate([value.startDate, endDate]);
  };

  return (
    <div
      style={{
        color: color ? color : "#44444f",
      }}
      className={`date-range  ${borderRadius ? "borderDateRange" : ""} `}>
      <DateRangePicker
        customInputIcon={<CalendarMonthIcon />}
        startDate={value.startDate}
        startDateId="startDate"
        endDate={value.endDate}
        isOutsideRange={() => false}
        minimumNights={0}
        endDateId="endDate"
        onDatesChange={handleDatesChange}
        focusedInput={focusedInput}
        onFocusChange={(focusedInput: any) => setFocusedInput(focusedInput)}
        // displayFormat="ll"
        displayFormat={() => "DD/MM/YYYY"}
        customArrowIcon={<RemoveIcon />}
      />
    </div>
  );
};

export default React.memo(RangePicker);
