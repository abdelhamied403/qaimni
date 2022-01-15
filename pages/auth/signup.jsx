import Image from "next/image";
import React from "react";
import Link from "../../src/components/Link";
import logo from "../../src/assets/logo.svg";
import banner from "../../src/assets/authBanner.png";
import SignupForm from "../../src/components/auth/SignupForm";

const Signup = (props) => {
  return (
    <div className="page">
      <div className="signup">
        <div className="grid grid-cols-2 min-h-screen">
          <div className="content col-span-2 lg:col-span-1">
            <div className="p-6 py-12 lg:p-24">
              <Image width="192" src={logo} alt="" />
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
          <div className="banner hidden lg:block lg:col-span-1">
            <div className="relative w-full h-full">
              <Image
                className="relative w-full h-full"
                layout="fill"
                objectFit="cover"
                src={banner}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
