import React from "react";
import { TextField } from "@mui/material";

const Input = ({ label, name, error, ...rest }) => {
  return (
    <TextField
      {...rest}
      error={!!error}
      name={name}
      label={label || name}
      helperText={error}
    />
  );
};

export default Input;
