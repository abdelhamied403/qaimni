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

  return {
    getCountries,
    getStates,
    getSocials
  };
})();

export default vocab;
