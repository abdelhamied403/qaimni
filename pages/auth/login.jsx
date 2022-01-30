import React, { useEffect, useState } from "react";
import Link from "../../src/components/Link";
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
        <img className="w-64" src="../assets/logo-demo.png" alt="" />
        <h1 className="text-4xl font-black mb-4">تسجيل الدخول</h1>
        <h4 className="text-lg text-gray-400 font-bold m-0">
          {vocab?.infos_desc}
        </h4>
        <Link href="/auth/signup">مستخدم جديد؟</Link>
        {/* form */}
        <LoginForm className="my-6 w-full xl:w-2/3 flex flex-col gap-4" />
      </div>
    </div>
  );
};

Login.Layout = Auth;
Login.DisplayName = "تسجيل الدخول";
export default Login;
