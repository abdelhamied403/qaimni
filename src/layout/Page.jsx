import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import Spinner from "../components/Spinner";
import Head from "next/head";

const Page = ({ title, children }) => {
  const app = useSelector((state) => state.app);

  return (
    <>
      <Head>
        <title>قيمني | {title}</title>
        <meta
          name="description"
          content="قيّمني اول منصة عربية تهدف إلى تجميع الآراء والتقييمات حول الشركات"
        />
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

        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Page;
