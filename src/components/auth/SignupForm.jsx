import React, { useEffect, useState } from "react";
import Input from "../../components/Input";
import {
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import vocab from "../../services/vocab";
import user from "../../services/user";

const SignupForm = (props) => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    job_title: "",
    country_id: "",
    state_id: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    email: "",
    job_title: "",
    country_id: "",
    state_id: "",
    password: "",
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
    const res = await user.register(form);
    dispatch(setUser(res.data.user));
  };

  return (
    <div className={`form ${props.className}`}>
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
        <FormControl>
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
        </FormControl>
        <FormControl>
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

      <div className="actions flex justify-between gap-2">
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={onSubmit}
        >
          الاشتراك
        </Button>
      </div>
    </div>
  );
};

export default SignupForm;
