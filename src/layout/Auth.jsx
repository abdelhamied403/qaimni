import React from "react";
import Head from "next/head";
import Image from "next/image";
import banner from "../assets/authBanner.png";

const Auth = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>Qaimni | {title}</title>
        <meta name="description" content="qaimni" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="page signup">
        <main>
          <div className="grid grid-cols-2 min-h-screen">{children}</div>
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
        </main>
      </div>
    </>
  );
};

export default Auth;
