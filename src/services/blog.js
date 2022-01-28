import api from "./axios";

const blog = (() => {
  const getArticles = async () => {
    const res = await api.get("blogs");
    return res.data;
  };
  const getArticle = async (id) => {
    const res = await api.get(`blogs/${id}`);
    return res.data;
  };

  return {
    getArticles,
    getArticle,
  };
})();

export default blog;
