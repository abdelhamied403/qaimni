import React from "react";
import Head from "next/head";

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
          <div className="grid grid-cols-2 min-h-screen">
            <div className="content col-span-2 lg:col-span-1">{children}</div>
            <div className="banner hidden lg:block col-span-0 lg:col-span-1">
              <img
                className="w-full h-screen object-cover"
                src="../assets/authBanner.png"
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
