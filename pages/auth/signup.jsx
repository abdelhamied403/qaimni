import React, { useEffect, useState } from "react";
import SignupForm from "../../src/components/auth/SignupForm";
import Auth from "../../src/layout/Auth";
import vocabService from "../../src/services/vocab";

const Signup = (props) => {
  const [vocab, setVocab] = useState();

  const getVocab = async () => {
    const res = await vocabService.getAuthVocab();
    setVocab(res.data);
  };

  useEffect(() => {
    getVocab();
  }, []);

  return (
    <div className="content col-span-2 lg:col-span-1 my-auto">
      <div className="mx-12">
        <img className="w-48" src="../assets/logo-demo.png" alt="" />
        <h1 className="text-4xl font-black my-6">الاشتراك</h1>
        <h4 className="text-lg text-gray-400 font-bold m-0">
          {vocab?.infos_desc}
        </h4>
        {/* form */}
        <SignupForm className="my-6 w-full xl:w-2/3 flex flex-col gap-4" />
      </div>
    </div>
  );
};

Signup.Layout = Auth;
Signup.DisplayName = "الاشتراك";
export default Signup;
