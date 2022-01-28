import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Page = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>Qaimni | {title}</title>
        <meta name="description" content="qaimni" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="page min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Page;
