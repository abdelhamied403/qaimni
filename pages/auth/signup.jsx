import React from "react";
import Link from "../../src/components/Link";
import SignupForm from "../../src/components/auth/SignupForm";
import Auth from "../../src/layout/Auth";

const Signup = (props) => {
  return (
    <div className="content col-span-2 lg:col-span-1">
      <div className="p-6 py-12 lg:p-24">
        <img className="w-64" src="../assets/logo.png" alt="" />
        <h1 className="text-4xl font-black mb-4">الاشتراك</h1>
        <h4 className="text-lg text-gray-400 font-bold m-0">
          ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال
          المعياردور النشر. كان لور
        </h4>
        <Link href="/auth/login">مستخدم حالي؟</Link>
        {/* form */}
        <SignupForm className="my-6 w-full xl:w-2/3 flex flex-col gap-4" />
      </div>
    </div>
  );
};

Signup.Layout = Auth;
export default Signup;
