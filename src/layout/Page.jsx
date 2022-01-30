import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import Spinner from "../components/Spinner";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { Alert } from "@mui/material";

const Page = ({ title, children }) => {
  const app = useSelector((state) => state.app);

  return (
    <>
      <Head>
        <title>Qaimni | {title}</title>
        <meta name="description" content="qaimni" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="page min-h-screen flex flex-col">
        <Navbar />
        {app.loading && (
          <div className="fixed h-screen w-screen bg-white bg-opacity-80 z-10 flex">
            <div className="m-auto">
              <Spinner />
            </div>
          </div>
        )}
        <div
          className={`fixed z-50 right-24 top-36 transition-opacity duration-500 ${
            app.alert ? "opacity-100" : "opacity-0"
          }`}
        >
          {app.alert && (
            <Alert
              icon={<CancelOutlinedIcon fontSize="inherit" />}
              severity="error"
            >
              {app.alert}
            </Alert>
          )}
        </div>
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Page;
