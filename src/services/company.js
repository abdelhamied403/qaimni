import api from "./axios";

const company = (() => {
  const getCompany = async (id) => {
    const res = await api.get(`companies/${id}`);
    return res.data;
  };
  const getCompanyReviews = async (id) => {
    const res = await api.get(`company/${id}/reviews`);
    return res.data;
  };

  const searchCompanies = async (query) => {
    const res = await api.get(`search?type=companies&search=${query}`);
    return res.data;
  };

  const getRatingTypes = async (as) => {
    const res = await api.get(`company/rating-types?type=${as}`);
    return res.data;
  };

  const submitReview = async (id, data) => {
    const res = await api.post(`company/${id}/review`, data);
    return res.data;
  };

  return {
    getCompany,
    getCompanyReviews,
    searchCompanies,
    getRatingTypes,
    submitReview,
  };
})();

export default company;
