import { Button, Rating, Input as MUIInput } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Page from "../../../src/layout/Page";
import company from "../../../src/services/company";
import Input from "../../../src/components/Input";
import { useSelector } from "react-redux";

const ClaimCompany = (props) => {
  const router = useRouter();
  const { id } = router.query;
  const [companyData, setCompanyData] = useState();
  const user = useSelector((state) => state.user.user);

  const [reader, setReader] = useState();
  const [form, setForm] = useState({
    claimer_name: "",
    claimer_phone: "",
    claimer_document: "",
    company_id: "",
  });
  const [errors, setErrors] = useState({
    claimer_name: "",
    claimer_phone: "",
    claimer_document: "",
    company_id: "",
  });

  const getCompanyData = async (id) => {
    if (id) {
      const res = await company.getCompany(id);
      setCompanyData(res.data);
    }
  };

  const onFileUpload = async (e) => {
    const file = e.target.files[0];
    reader.readAsDataURL(file);

    reader.onloadend = function (e) {
      setForm((prev) => ({
        ...prev,
        claimer_document: e.target.result,
      }));
    };
  };

  const submit = async () => {
    const res = await company.claim(form);
    console.log(res.data);
  };

  useEffect(() => {
    setReader(new FileReader());
  }, []);

  useEffect(() => {
    getCompanyData(id);
    setForm((prev) => ({
      ...prev,
      claimer_name: user?.name || "",
      claimer_phone: user?.phone || "",
      company_id: id || "",
    }));
  }, [user, id]);

  return (
    <div className="mx-8 md:mx-12 lg:mx-24 my-12">
      <div className="head flex flex-wrap gap-4 items-center my-12">
        <div className="logo border border-solid border-gray-400 rounded-xl p-4">
          <img
            className="w-44 h-44 object-contain"
            src={companyData?.logo_url}
            alt=""
          />
        </div>
        <div className="info flex-1">
          <div className="flex flex-wrap justify-between items-start">
            <div className="info">
              <h1 className="m-0">{companyData?.name}</h1>
              <p>
                {companyData?.address} - {companyData?.phone}
              </p>
            </div>
            <div className="actions flex gap-4">
              <Link href={`/company/${id}/review`} passHref>
                <Button variant="contained" color="primary" size="large">
                  تقديم رأيك
                </Button>
              </Link>
            </div>
          </div>
          <div className="rate">
            <Rating
              name="size-large"
              value={companyData?.rate || 0}
              size="large"
              readOnly
              precision={0.1}
            />
          </div>
          <p className="m-0">{companyData?.description}</p>
        </div>
      </div>

      <div className="body">
        <div className="flex flex-col gap-4 max-w-xl mx-auto">
          <Input
            required
            label="الاسم بالكامل"
            name="claimer_name"
            value={form.claimer_name}
            setValue={setForm}
            error={errors.claimer_name}
            setError={setErrors}
          />
          <Input
            required
            label="الهاتف"
            name="claimer_phone"
            value={form.claimer_phone}
            setValue={setForm}
            error={errors.claimer_phone}
            setError={setErrors}
          />
          <div className="add-prove">
            <h2>ارفق صوره من البطاقة الضريبيه او السجل التجاري</h2>
            <label htmlFor="contained-button-file" className="block my-4">
              <div className="hidden">
                <MUIInput
                  accept="image/*"
                  id="contained-button-file"
                  multiple
                  type="file"
                  onInput={onFileUpload}
                />
              </div>
              <Button variant="contained" color="accent" component="span">
                ارفاق صوره
              </Button>
            </label>
            <div className="my-8 flex justify-center">
              <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={submit}
              >
                المطالبه بالشركه
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ClaimCompany.Layout = Page;
ClaimCompany.DisplayName = "ClaimCompany";
export default ClaimCompany;
