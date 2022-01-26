import React, { useState } from "react";
import Input from "../../components/Input";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import user from "../../services/user";

const SignupForm = (props) => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    jobTitle: "",
    country: "",
    state: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    email: "",
    jobTitle: "",
    country: "",
    state: "",
    password: "",
  });

  const validate = () => {
    let hasError = false;
    if (!form.name || form.name.trim() == "") {
      setErrors({ ...errors, name: "من فضلك ادخل الاسم بالكامل" });
      hasError = true;
    }
    if (!form.phone || form.phone.trim() == "") {
      setErrors({ ...errors, phone: "من فضلك ادخل الهاتف" });
      hasError = true;
    }
    if (!form.email || form.email.trim() == "") {
      setErrors({ ...errors, email: "من فضلك ادخل البريد الالكتروني" });
      hasError = true;
    }
    if (!form.jobTitle || form.jobTitle.trim() == "") {
      setErrors({ ...errors, jobTitle: "من فضلك ادخل المسمي الوظيفي" });
      hasError = true;
    }
    if (!form.country || form.country.trim() == "") {
      setErrors({ ...errors, country: "من فضلك ادخل الدوله" });
      hasError = true;
    }
    if (!form.state || form.state.trim() == "") {
      setErrors({ ...errors, state: "من فضلك ادخل المدينه" });
      hasError = true;
    }
    if (!form.password || form.password.trim() == "") {
      setErrors({ ...errors, password: "من فضلك ادخل كلمة السر" });
      hasError = true;
    }

    return hasError;
  };

  const onSubmit = async () => {
    if (!validate()) {
      const res = await user.register(form);
      dispatch(setUser(res.data.user));
      // router.push("/");
    }
  };
  return (
    <div className={`form ${props.className}`}>
      <Input
        label="الاسم بالكامل"
        error={errors.name}
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <Input
        label="الهاتف"
        error={errors.phone}
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
      />
      <Input
        label="البريد الالكتروني"
        error={errors.email}
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <Input
        label="المسمي الوظيفي"
        error={errors.jobTitle}
        value={form.jobTitle}
        onChange={(e) => setForm({ ...form, jobTitle: e.target.value })}
      />
      <Input
        label="الدوله"
        error={errors.country}
        value={form.country}
        onChange={(e) => setForm({ ...form, country: e.target.value })}
      />
      <Input
        label="المدينه"
        error={errors.state}
        value={form.state}
        onChange={(e) => setForm({ ...form, state: e.target.value })}
      />
      <Input
        type="password"
        label="كلمة السر"
        error={errors.password}
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
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
