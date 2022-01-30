import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import Input from "../src/components/Input";
import Page from "../src/layout/Page";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import user from "../src/services/user";
import vocabService from "../src/services/vocab";

const Contact = (props) => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [vocab, setVocab] = useState();

  const submit = async () => {
    await user.contactUs(form);
  };

  const getVocab = async () => {
    const res = await vocabService.getContactVocab();
    setVocab(res.data);
  };

  useEffect(() => {
    getVocab();
  }, []);

  return (
    <div className="contact mx-24 mt-8 flex flex-col items-center">
      <img src="/assets/contact.png" alt="" />
      <p className="text-center my-4  w-full lg:w-1/2">{vocab?.infos_desc}</p>
      <h1 className="text-center my-4  w-full lg:w-1/2">
        {vocab?.infos_title}
      </h1>
      <div className="form w-full lg:w-1/2">
        <div className="flex flex-col gap-4">
          <Input
            required
            label="الاسم"
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
            label="رسالتك"
            name="message"
            value={form.message}
            multiline
            maxRows={4}
            setValue={setForm}
            error={errors.message}
            setError={setErrors}
          />
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={submit}
          >
            ارسال
          </Button>
        </div>
      </div>
      <div className="contact-data my-12">
        <div className="flex gap-8">
          <div className="item flex items-center gap-2">
            <EmailIcon color="primary" />
            <div className="info">
              <p className="font-bold">البريد الالكتروني</p>
              <p>abousad@ajfew.com</p>
            </div>
          </div>
          <div className="item flex items-center gap-2">
            <LocalPhoneIcon color="primary" />
            <div className="info">
              <p className="font-bold">رقم الهاتف</p>
              <p>012635584844</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Contact.Layout = Page;
Contact.DisplayName = "تواصل معنا";
export default Contact;
