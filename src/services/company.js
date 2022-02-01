import api from "./axios";

const company = (() => {
  const getCompany = async (id) => {
    const res = await api.get(`companies/${id}`);
    return res.data;
  };
  const getCompanyReviews = async (id, as) => {
    const res = await api.get(`company/${id}/reviews?type=${as}`);
    return res.data;
  };

  const searchCompanies = async (query, category) => {
    const res = await api.get(`search?type=companies&category_id=${category}&search=${query}`);
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

  const claim = async (data) => {
    const res = await api.post(`company/claim`, data);
    return res.data;
  };

  return {
    getCompany,
    getCompanyReviews,
    searchCompanies,
    getRatingTypes,
    submitReview,
    claim,
  };
})();

export default company;
