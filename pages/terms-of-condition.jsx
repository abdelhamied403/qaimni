import React, { useEffect, useState } from "react";
import vocabService from "../src/services/vocab";
import Page from "../src/layout/Page";

const Terms = (props) => {
  const [vocab, setVocab] = useState();

  const getVocab = async () => {
    const res = await vocabService.getTermsVocab();
    setVocab(res.data);
  };

  useEffect(() => {
    getVocab();
  }, []);

  return (
    <div className="about mx-24 mt-8 flex flex-col items-center">
      <p className="my-4 mb-24">
        <div dangerouslySetInnerHTML={{ __html: vocab?.infos_desc }} />
      </p>
    </div>
  );
};

Terms.Layout = Page;
Terms.DisplayName = "شروط الاستخدام";
export default Terms;
