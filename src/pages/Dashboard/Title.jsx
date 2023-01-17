import React from "react";
import { Typography } from "@mui/material";

function Title({ title }) {
  return (
    <Typography component="h2" variant="h6" color="primary" gutterBottom>
      {title}
    </Typography>
  );
}

export default Title;
