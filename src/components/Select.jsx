import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select as MUISelect,
} from "@mui/material";
import React from "react";

const Select = ({
  label,
  value,
  onChange,
  options,
  track_key = "id",
  track_value = "name",
  error,
  ...rest
}) => {
  return (
    <FormControl error={error}>
      <InputLabel>{label}</InputLabel>
      <MUISelect label={label} value={value} onChange={onChange} {...rest}>
        {options?.map((option) => (
          <MenuItem dir="rtl" key={option[track_key]} value={option[track_key]}>
            {option[track_value]}
          </MenuItem>
        ))}
      </MUISelect>
      <FormHelperText>{error}</FormHelperText>
    </FormControl>
  );
};

export default Select;
