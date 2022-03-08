import React, { useEffect, useState } from "react";
import Input from "../../components/Input";
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import vocab from "../../services/vocab";
import user from "../../services/user";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/slices/user.slice";
import { useRouter } from "next/router";
import FacebookIcon from "@mui/icons-material/Facebook";
import { useSession, signIn, getProviders } from "next-auth/react";
import Link from "../Link";

const SignupForm = (props) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [providers, setProviders] = useState([]);
  const session = useSession();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    job_title: "",
    country_id: "",
    state_id: "",
    password: "",
    agreed: false,
  });
  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    email: "",
    job_title: "",
    country_id: "",
    state_id: "",
    password: "",
    agreed: "",
  });

  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);

  const getCountries = async () => {
    const countries = await vocab.getCountries();
    setCountries(countries.data);
  };
  const getStates = async () => {
    const states = await vocab.getStates(form.country_id);
    setStates(states.data);
  };

  useEffect(() => {
    getCountries();
  }, []);

  useEffect(() => {
    getStates();
  }, [form.country_id]);

  const onSubmit = async () => {
    try {
      if (form.agreed) {
        setErrors({});
        const res = await user.register(form);
        dispatch(setUser(res.data.user));
        router.push("/");
      } else {
        throw {
          errors: {
            agreed: "يجب عليك الموافقه اولاً علي الشروط والاحكام",
          },
        };
      }
    } catch (error) {
      setErrors((prev) => ({ ...prev, ...error.errors }));
    }
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
    dispatch(setUser(res?.data?.user));
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
          <img className="w-6" src="/assets/google_logo.png" alt="" />
          <span>جوجل</span>
        </Button>
      </div>
      <Input
        required
        label="الاسم بالكامل"
        name="name"
        value={form.name}
        setValue={setForm}
        error={errors.name}
        setError={setErrors}
      />
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
        email
        label="البريد الالكتروني"
        name="email"
        value={form.email}
        setValue={setForm}
        error={errors.email}
        setError={setErrors}
      />
      <Input
        required
        label="المسمي الوظيفي"
        name="job_title"
        value={form.job_title}
        setValue={setForm}
        error={errors.job_title}
        setError={setErrors}
      />

      <div className="grid grid-cols-2 gap-2">
        <FormControl error={errors.country_id}>
          <InputLabel>الدوله</InputLabel>
          <Select
            value={form.country_id}
            label="Country"
            onChange={(e) =>
              setForm((prev) => ({
                ...prev,
                country_id: e.target.value,
              }))
            }
          >
            {countries.map((country) => (
              <MenuItem key={country.id} value={country.id}>
                {country.name}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>{errors.country_id}</FormHelperText>
        </FormControl>
        <FormControl error={errors.state_id}>
          <InputLabel>المدينه</InputLabel>
          <Select
            disabled={!form.country_id}
            value={form.state_id}
            label="المدينه"
            onChange={(e) =>
              setForm((prev) => ({
                ...prev,
                state_id: e.target.value,
              }))
            }
          >
            {states.map((state) => (
              <MenuItem key={state.id} value={state.id}>
                {state.name}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>{errors.state_id}</FormHelperText>
        </FormControl>
      </div>

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

      <div className="checks">
        <div className="flex">
          <Checkbox
            checked={form.agreed}
            onChange={(e) =>
              setForm((prev) => ({
                ...prev,
                agreed: +e.target.checked,
              }))
            }
          />
          <p>
            أوافق علي{" "}
            <a
              className="underline font-bold"
              href="/terms-of-condition"
              target="_blank"
            >
              الشروط والاحكام
            </a>
          </p>
        </div>
        {errors.agreed && <span className="text-red-500">{errors.agreed}</span>}
      </div>

      <div className="actions flex items-center justify-between gap-2">
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={onSubmit}
        >
          الاشتراك
        </Button>
        <Link href="/auth/login">مستخدم حالي؟</Link>
      </div>
    </div>
  );
};

export default SignupForm;
