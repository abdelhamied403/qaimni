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

  const componentClicked = (props) => {
    console.log(props);
  };
  const responseFacebook = (props) => {
    console.log(props);
  };
  const responseGoogle = (props) => {
    console.log(props);
  };

  return (
    <div className={`form ${props.className}`}>
      <div className="social-login">social logins</div>
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
