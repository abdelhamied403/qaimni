import React, { useEffect, useState } from "react";
import Input from "../../components/Input";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import user from "../../services/user";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../redux/slices/user.slice";
import { signIn, getProviders } from "next-auth/react";

const LoginForm = (props) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [providers, setProviders] = useState([]);

  const [form, setForm] = useState({
    phone: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    phone: "",
    password: "",
  });

  const onSubmit = async () => {
    const res = await user.login(form);
    dispatch(setUser(res.data.user));
    router.push("/");
  };

  useEffect(() => {
    getProviders()
      .then((providers) => {
        console.log(providers);
        setProviders(providers);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className={`form ${props.className}`}>
      <div className="social-login flex gap-2">
        {/* {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <Button
              variant="contained"
              color="inherit"
              size="large"
              onClick={() => signIn(provider.id)}
            >
              تسجيل بـ {provider.name}
            </Button>
          </div>
        ))} */}
      </div>
      <Input
        required
        label="الهاتف"
        name="phone"
        value={form.phone}
        setValue={setForm}
        error={errors.phone}
        setError={setErrors}
      />
      <Input
        required
        type="password"
        label="كلمة السر"
        name="password"
        value={form.password}
        setValue={setForm}
        error={errors.password}
        setError={setErrors}
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

// export async function getServerSideProps(context) {
//   return { props: { providers: await providers() } };
// }
