import api from "./axios";

const vocab = (() => {
  const getCountries = async () => {
    const res = await api.get("countries");
    return res.data;
  };
  const getStates = async (countryId) => {
    const res = await api.get(`states?country_id=${countryId}`);
    return res.data;
  };
  const getSocials = async () => {
    const res = await api.get("social-media");
    return res.data;
  }
  const getContactVocab = async () => {
    const res = await api.get("vocab?page=contact_us_page");
    return res.data;
  }
  const getAboutVocab = async () => {
    const res = await api.get("vocab?page=about_us_page");
    return res.data;
  }
  const getAuthVocab = async () => {
    const res = await api.get("vocab?page=auth_page");
    return res.data;
  }
  const getPrivacyVocab = async () => {
    const res = await api.get("vocab?page=privacy_policy");
    return res.data;
  }
  const getTermsVocab = async () => {
    const res = await api.get("vocab?page=terms_of_use");
    return res.data;
  }

  return {
    getCountries,
    getStates,
    getSocials,
    getContactVocab,
    getAboutVocab,
    getAuthVocab,
    getPrivacyVocab,
    getTermsVocab,
  };
})();

export default vocab;
