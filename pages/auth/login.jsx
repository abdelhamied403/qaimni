import React from "react";
import Link from "../../src/components/Link";
import LoginForm from "../../src/components/auth/LoginForm";
import Auth from "../../src/layout/Auth";

const Login = (props) => {
  return (
    <div className="p-6 py-12 lg:p-24">
      <img className="w-64" src="../assets/logo.png" alt="" />
      <h1 className="text-4xl font-black mb-4">تسجيل الدخول</h1>
      <h4 className="text-lg text-gray-400 font-bold m-0">
        ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال
        المعياردور النشر. كان لور
      </h4>
      <Link href="/auth/signup">مستخدم جديد؟</Link>
      {/* form */}
      <LoginForm className="my-6 w-full xl:w-2/3 flex flex-col gap-4" />
    </div>
  );
};

Login.Layout = Auth;
export default Login;
