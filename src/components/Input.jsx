import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useEffect } from "react";

const Input = ({
  required,
  email,
  type,
  options,
  name,
  label,
  maxRows,
  multiline,
  value,
  setValue,
  error,
  setError,
  InputProps,
  ...rest
}) => {
  const validate = (value) => {
    if (required && (!value || value?.trim() === "")) {
      const message = required === true ? `${label} مطلوب` : required;
      setError &&
        setError((prev) => ({
          ...prev,
          [name]: message,
        }));
      return;
    }
    if (email && !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)) {
      const message = email === true ? "البريد الالكتروني غير صحيح" : email;
      setError &&
        setError((prev) => ({
          ...prev,
          [name]: message,
        }));
      return;
    }

    setError &&
      setError((prev) => ({
        ...prev,
        [name]: "",
      }));
  };

  const onChange = (e) => {
    const { value } = e.target;
    setValue &&
      setValue((prev) => ({
        ...prev,
        [name]: value,
      }));

    validate(value);
  };

  return (
    <TextField
      {...rest}
      maxRows={maxRows}
      multiline={multiline}
      type={type || "text"}
      value={value}
      error={error?.length > 0}
      label={label}
      helperText={error}
      onInput={onChange}
      InputProps={InputProps}
    />
  );
};

export default Input;
