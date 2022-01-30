import React, { useEffect, useState } from "react";
import vocabService from "../src/services/vocab";
import Page from "../src/layout/Page";

const PrivacyPolicy = (props) => {
  const [vocab, setVocab] = useState();

  const getVocab = async () => {
    const res = await vocabService.getPrivacyVocab();
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

PrivacyPolicy.Layout = Page;
PrivacyPolicy.DisplayName = "سياسة الخصوصيه";
export default PrivacyPolicy;
