import React from "react";
// import DatePicker from "react-datepicker";

import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker as DatePickerMui } from "@mui/x-date-pickers/DatePicker";

import "react-datepicker/dist/react-datepicker.css";
import { Box, Button } from "@mui/material";

export default function LabDummy() {
  const [startDate, setStartDate] = React.useState(new Date());
  const [endDate, setEndDate] = React.useState(tenDays(new Date(), 6));
  const [maxDate, setMaxDate] = React.useState(null);

  // const [value, setValue] = React.useState(new Date());
  // const [minDate, setMinDate] = React.useState(null);
  function addDays(date, days) {
    let result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }
  // function minDays(date, days) {
  //   let result = new Date(date);
  //   result.setDate(result.getDate() - days);
  //   return result;
  // }
  function tenDays(date, days) {
    let result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  function result() {
    console.log({
      start: new Date(startDate).toLocaleDateString("pt-PT"),
      end: new Date(endDate).toLocaleDateString("pt-PT"),
    });
  }

  React.useEffect(() => {
    setMaxDate(addDays(startDate, 6));
    setEndDate(tenDays(startDate, 6));
  }, [startDate]);
  return (
    <>
      {/* <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
      <DatePicker
        selected={endDate}
        disabled={!startDate}
        maxDate={maxDate}
        minDate={startDate}
        onChange={(date) => setEndDate(date)}
      /> */}
      <Box
        sx={{
          mt: 10,
          display: "flex",
          flexDirection: "row",
          gap: 5,
        }}
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePickerMui
            label="Start example"
            value={startDate}
            onChange={(newValue) => {
              setStartDate(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePickerMui
            label="End example"
            value={endDate}
            maxDate={maxDate}
            minDate={startDate}
            onChange={(newValue) => {
              setEndDate(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
        <Button variant="contained" onClick={result}>
          Test
        </Button>
      </Box>
    </>
  );
}

// import * as React from 'react';

// import TextField from '@mui/material/TextField';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';

// export default function BasicDatePicker() {
//   const [value, setValue] = React.useState(null);

//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <DatePicker
//         label="Basic example"
//         value={value}
//         onChange={(newValue) => {
//           setValue(newValue);
//         }}
//         renderInput={(params) => <TextField {...params} />}
//       />
//     </LocalizationProvider>
//   );
// }
