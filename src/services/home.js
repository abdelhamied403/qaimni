import api from "./axios";

const home = (() => {
  const getHomeData = async () => {
    const res = await api.get("home");
    return res.data;
  };

  return {
    getHomeData,
  };
})();

export default home;
