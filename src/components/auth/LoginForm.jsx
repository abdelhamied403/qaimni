import React, { useState } from "react";
import Input from "../../components/Input";
import { Button } from "@mui/material";
import { useRouter } from "next/router";

const LoginForm = (props) => {
  const router = useRouter();
  const [errors, setErrors] = useState(false);

  const onSubmit = () => {
    console.log(errors);
    router.push("/");
  };

  return (
    <div className={`form ${props.className}`}>
      <Input required email label="البريد الالكتروني" setErrors={setErrors} />
      <Input required type="password" label="كلمة السر" setErrors={setErrors} />
      <div className="actions flex justify-between gap-2">
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={onSubmit}
        >
          تسجيل الدخول
        </Button>
      </div>
    </div>
  );
};

export default LoginForm;
