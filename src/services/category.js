import api from "./axios";

const section = (() => {
  const getAllCategories = async () => {
    const res = await api.get("categories");
    return res.data;
  };
  const getCategory = async (id) => {
    const res = await api.get(`categories/${id}`);
    return res.data;
  };
  const getCategoryCompanies = async (id) => {
    const res = await api.get(`categories/${id}/companies`);
    return res.data;
  };

  return {
    getAllCategories,
    getCategory,
    getCategoryCompanies,
  };
})();

export default section;
