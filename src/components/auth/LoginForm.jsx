import React, { useEffect, useState } from "react";
import Input from "../../components/Input";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import user from "../../services/user";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/slices/user.slice";
import { useSession, signIn, getProviders } from "next-auth/react";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import Link from "next/link";

const LoginForm = (props) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [providers, setProviders] = useState([]);
  const session = useSession();

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

  const socialLogin = async () => {
    const data = {
      name: session.data?.name,
      email: session.data?.email,
      picture: session.data?.picture,
      provider_name: localStorage.getItem("provider"),
      provider_id: session.data?.sub,
    };
    const res = await user.socialLogin(data);
    dispatch(setUser(res.data.user));
    router.push("/");
  };

  useEffect(() => {
    if (session && localStorage.getItem("provider")) socialLogin();
  }, [session]);

  useEffect(() => {
    getProviders().then((providers) => {
      setProviders(providers);
    });
  }, []);

  return (
    <div className={`form ${props.className}`}>
      <h3>سجل دخول بواسطه</h3>
      <div className="social-login flex gap-2">
        <Button
          variant="contained"
          color="inherit"
          style={{ backgroundColor: "#4267B2", color: "white" }}
          className="flex gap-2"
          size="large"
          onClick={() => {
            signIn(providers.facebook.id);
            localStorage.setItem("provider", providers.facebook.id);
          }}
        >
          <FacebookIcon />
          <span>فيسبوك</span>
        </Button>
        <Button
          variant="outlined"
          color="inherit"
          style={{ backgroundColor: "#fff", color: "black" }}
          className="flex gap-2"
          size="large"
          onClick={() => {
            signIn(providers.google.id);
            localStorage.setItem("provider", providers.google.id);
          }}
        >
          <img className="w-6" src="/assets/google_logo-demo.png" alt="" />
          <span>جوجل</span>
        </Button>
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
      <div className="actions flex justify-between items-center gap-2">
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={onSubmit}
        >
          تسجيل الدخول
        </Button>
        <Link href="/auth/signup">مستخدم جديد؟</Link>
      </div>
    </div>
  );
};

export default LoginForm;

// export async function getServerSideProps(context) {
//   return { props: { providers: await providers() } };
// }
