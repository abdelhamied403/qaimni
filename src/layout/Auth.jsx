import React from "react";
import Head from "next/head";
import Spinner from "../components/Spinner";
import { Alert } from "@mui/material";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { useSelector } from "react-redux";

const Auth = ({ title, children }) => {
  const app = useSelector((state) => state.app);

  return (
    <>
      <Head>
        <title>Qaimni | {title}</title>
        <meta name="description" content="qaimni" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="page signup">
        {app.loading && (
          <div className="fixed h-screen w-screen bg-white bg-opacity-80 z-10 flex">
            <div className="m-auto">
              <Spinner />
            </div>
          </div>
        )}
        <main>
          <div className="grid grid-cols-2 min-h-screen">
            <div className="content col-span-2 lg:col-span-1 flex py-24 max-h-screen overflow-auto">
              {children}
            </div>
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
