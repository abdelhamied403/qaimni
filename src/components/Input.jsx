import { TextField } from "@mui/material";
import React, { useState } from "react";

const Input = ({ label, required, email, setErrors, ...rest }) => {
  const [errorMessage, setErrorMessage] = useState();

  const onChange = (e) => {
    if (required && e.target.value.trim() === "") {
      setErrorMessage(required === true ? `${label} مطلوب` : required);
      setErrors && setErrors(true);
      return;
    }
    if (email && !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(e.target.value)) {
      setErrorMessage(email === true ? "البريد الالكتروني غير صحيح" : email);
      setErrors && setErrors(true);
      return;
    }

    setErrorMessage();
    setErrors && setErrors(false);
  };

  return (
    <TextField
      {...rest}
      error={!!errorMessage}
      label={label}
      helperText={errorMessage}
      onInput={onChange}
    />
  );
};

export default Input;
