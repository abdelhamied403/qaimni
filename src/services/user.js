import api from "./axios";

const user = (() => {
  const me = async () => {
    const res = await api.get("auth/me");
    return res.data;
  };

  const login = async (data) => {
    const res = await api.post("auth/login", data);
    const token = res.data.data.access_token.access_token;
    localStorage.setItem("token", token);
    return res.data;
  };

  const register = async (data) => {
    const res = await api.post("auth/register", data);
    const token = res.data.data.access_token.access_token;
    localStorage.setItem("token", token);
    return res.data;
  };

  const socialLogin = async (data) => {
    const res = await api.post("auth/social", data);
    const token = res.data.data.access_token.access_token;
    localStorage.setItem("token", token);
    return res.data;
  };

  const uploadCV = async (cv) => {
    const res = await api.patch("profile/upload-cv", { cv });
    return res.data;
  };
  const update = async (data) => {
    const res = await api.put("profile/update", data);
    return res.data;
  };

  return {
    me,
    login,
    register,
    socialLogin,
    uploadCV,
    update,
  };
})();

export default user;
