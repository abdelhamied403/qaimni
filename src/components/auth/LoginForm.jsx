import React, { useState } from "react";
import Input from "../../components/Input";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";

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
      <div className="social-login">
        <FacebookLogin
          appId="1088597931155576"
          autoLoad={true}
          fields="name,email,picture"
          onClick={componentClicked}
          callback={responseFacebook}
        />
        <GoogleLogin
          clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
      </div>
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
