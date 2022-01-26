import React, { useState } from "react";
import Input from "../../components/Input";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import user from "../../services/user";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../redux/slices/user.slice";

const LoginForm = (props) => {
  const router = useRouter();
  const dispatch = useDispatch();

  // state
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validate = () => {
    let hasError = false;
    if (!phone || phone.trim() === "") {
      setPhoneError("من فضلك ادخل رقم الهاتف");
      hasError = true;
    }
    if (!password || password.trim() === "") {
      setPasswordError("من فضلك ادخل كلمه السر");
      hasError = true;
    }

    return hasError;
  };

  const onSubmit = async () => {
    if (!validate()) {
      const res = await user.login(phone, password);
      dispatch(setUser(res.data.user));
      router.push("/");
    }
  };

  return (
    <div className={`form ${props.className}`}>
      <div className="social-login">social logins</div>
      <Input
        label="الهاتف"
        error={phoneError}
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <Input
        type="password"
        label="كلمة السر"
        error={passwordError}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
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
