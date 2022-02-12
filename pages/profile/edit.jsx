import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Input as MUIInput,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Input from "../../src/components/Input";
import Page from "../../src/layout/Page";
import vocab from "../../src/services/vocab";
import userService from "../../src/services/user";
import { useRouter } from "next/router";
import withAuth from "../../src/components/HOC/withAuth";
import { setUser } from "../../src/redux/slices/user.slice";
import { setAlert } from "../../src/redux/slices/app.slice";
import company from "../../src/services/company";
import Select from "../../src/components/Select";

const ProfileEdit = (props) => {
  const user = useSelector((state) => state.user.user);
  const cvFile = useRef(null);
  const [reader, setReader] = useState();
  const router = useRouter();
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    job_title: "",
    country_id: "",
    state_id: "",
    company_id: "",
    image: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    email: "",
    job_title: "",
    country_id: "",
    state_id: "",
    company_id: "",
    image: "",
  });
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [companies, setCompanies] = useState([]);

  const getCountries = async () => {
    const countries = await vocab.getCountries();
    setCountries(countries.data);
  };
  const getStates = async () => {
    const states = await vocab.getStates(form.country_id);
    setStates(states.data);
  };
  const getCompanies = async () => {
    const companies = await company.searchCompanies();
    setCompanies(companies.data);
  };

  const onSubmit = async () => {
    const res = await userService.update(form);
    dispatch(setUser(res.data));
    localStorage.setItem("user", JSON.stringify(res.data));
    router.push("/profile");
  };

  const onCVUpload = (e) => {
    const file = e.target.files[0];
    reader.readAsDataURL(file);

    reader.onloadend = async function (e) {
      await userService.uploadCV(e.target.result);
      dispatch(
        setAlert({
          message: "لقد تم تحميل السيره الذاتيه بنجاح",
          status: "success",
        })
      );
      setTimeout(() => {
        dispatch(setAlert(null));
      }, 2000);
    };
  };

  const onFileUpload = (e) => {
    const file = e.target.files[0];
    const url = reader.readAsDataURL(file);

    reader.onloadend = function (e) {
      setForm((prev) => ({
        ...prev,
        image: e.target.result,
      }));
    };
  };

  useEffect(() => {
    getCountries();
    setReader(new FileReader());
    getCompanies();
  }, []);

  useEffect(() => {
    if (form.country_id) getStates();
  }, [form.country_id]);

  useEffect(() => {
    if (user) setForm(user);
  }, [user]);

  return (
    <div className="profileEdit px-24 pt-8">
      <div className="flex justify-between items-start">
        <div className="flex items-start gap-8">
          <img
            className="bg-gray-300 w-36 h-36 rounded-2xl"
            src={user?.image_url || "/assets/default_user.png"}
            alt=""
          />
          <div className="info">
            <h1 className="text-4xl">{user?.name}</h1>
            <p className="text-gray-500">{user?.job_title}</p>
            <p className="text-gray-500">
              {user?.country} - {user?.state}
            </p>
          </div>
        </div>
        <div className="actions">
          <input
            type="file"
            id="cv"
            ref={cvFile}
            style={{ display: "none" }}
            onChange={onCVUpload}
          />
          <Button
            variant="contained"
            component="span"
            onClick={() => cvFile.current?.click()}
          >
            تحميل السيرة الذاتية
          </Button>
        </div>
      </div>

      <div className="body">
        <div className="grid grid-cols-2">
          <div className="flex flex-col gap-4">
            <h1>معلومات شخصيه</h1>
            <Input
              required
              label="الاسم بالكامل"
              name="name"
              value={form?.name}
              setValue={setForm}
              error={errors.name}
              setError={setErrors}
            />
            <Input
              required
              label="الهاتف"
              name="phone"
              value={form?.phone}
              setValue={setForm}
              error={errors.phone}
              setError={setErrors}
            />
            <Input
              required
              email
              label="البريد الالكتروني"
              name="email"
              value={form?.email}
              setValue={setForm}
              error={errors.email}
              setError={setErrors}
            />
            <Input
              required
              label="المسمي الوظيفي"
              name="job_title"
              value={form?.job_title}
              setValue={setForm}
              error={errors.job_title}
              setError={setErrors}
            />
            <Select
              label="الشركه"
              options={companies?.data}
              value={form?.company_id}
              onChange={(e) =>
                setForm((prev) => ({
                  ...prev,
                  company_id: e.target.value,
                }))
              }
            />
            <div className="grid grid-cols-2 gap-2">
              <Select
                label="الدوله"
                options={countries}
                value={form.country_id}
                onChange={(e) =>
                  setForm((prev) => ({
                    ...prev,
                    country_id: e.target.value,
                  }))
                }
              />
              <Select
                disabled={!form.country_id}
                label="المدينه"
                options={states}
                value={form.state_id}
                onChange={(e) =>
                  setForm((prev) => ({
                    ...prev,
                    state_id: e.target.value,
                  }))
                }
              />
            </div>
            <div className="add-logo">
              <h2>اضف الصوره الشخصيه</h2>
              <div className="flex flex-wrap gap-4 my-2">
                <MUIInput accept="image/*" type="file" onInput={onFileUpload} />
              </div>
            </div>
          </div>
        </div>
        <div className="my-8">
          <Button
            variant="contained"
            color="accent"
            size="large"
            onClick={onSubmit}
          >
            تعديل
          </Button>
        </div>
      </div>
    </div>
  );
};

export default withAuth(ProfileEdit, Page, "تعديل الملف الشخصي");
