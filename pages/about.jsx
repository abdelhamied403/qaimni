import React, { useEffect, useState } from "react";
import Head from "next/head";
import Page from "../src/layout/Page";
import vocabService from "../src/services/vocab";

const About = (props) => {
  const [vocab, setVocab] = useState();

  const getVocab = async () => {
    const res = await vocabService.getAboutVocab();
    setVocab(res.data);
  };

  useEffect(() => {
    getVocab();
  }, []);

  return (
    <div className="about mx-24 mt-8 flex flex-col items-center">
      <Head>
        <title>ABout Qaimni</title>
        <meta name="description" content="Abiut Us Description" />
      </Head>
      <img src="/assets/about.png" alt="" />
      <h1>{vocab?.infos_title}</h1>
      <p className="text-center my-4 mb-24">
        <div dangerouslySetInnerHTML={{ __html: vocab?.infos_desc }} />
      </p>
    </div>
  );
};

About.Layout = Page;
About.DisplayName = "عنا";
export default About;
