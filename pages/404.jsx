import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const NotFound = (props) => {
  const [sec, setSec] = useState(9);
  const router = useRouter();

  useEffect(() => {
    const timer = setInterval(() => {
      setSec(sec--);
      if (sec < 0) {
        clearInterval(timer);
        router.push("/");
      }
    }, 1000);
  }, []);

  return (
    <div className="page flex h-screen">
      <div className="404 m-auto">
        <img className="w-1/2 mx-auto" src="/assets/404.svg" alt="" />
        <h1 className="text-6xl text-center my-8 text-gray-800">
          هذه الصفحه غير موجوده
        </h1>
        <p className="text-center">
          سوف يتم تحويلك في خلال{" "}
          <span className="text-primary text-xl font-black mx-2">{sec}</span>{" "}
          ثواني
        </p>
      </div>
    </div>
  );
};

export default NotFound;
