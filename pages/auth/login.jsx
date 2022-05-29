import Link from "next/link";
import React, { useEffect, useState } from "react";
import LoginForm from "../../src/components/auth/LoginForm";
import Auth from "../../src/layout/Auth";
import vocabService from "../../src/services/vocab";

const Login = (props) => {
  const [vocab, setVocab] = useState();

  const getVocab = async () => {
    const res = await vocabService.getAuthVocab();
    setVocab(res.data);
  };

  useEffect(() => {
    getVocab();
  }, []);

  return (
    <div className="my-auto">
      <div className="mx-12">
        <Link href="/" passHref>
          <img
            className="w-64 cursor-pointer"
            src="../assets/logo.svg"
            alt=""
          />
        </Link>
        <h1 className="text-4xl font-black my-6">تسجيل الدخول</h1>
        <h4 className="text-lg text-gray-400 font-bold m-0">
          {vocab?.infos_desc}
        </h4>
        {/* form */}
        <LoginForm className="my-6 w-full xl:w-2/3 flex flex-col gap-4" />
      </div>
    </div>
  );
};

Login.Layout = Auth;
Login.DisplayName = "تسجيل الدخول";
export default Login;
