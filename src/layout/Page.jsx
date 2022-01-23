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
      <div className="page">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Page;
