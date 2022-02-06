import api from "./axios";

const user = (() => {
  const me = async () => {
    const res = await api.get("auth/me");
    localStorage.setItem("user", JSON.stringify(res.data.data))
    return res.data;
  };

  const login = async (data) => {
    const res = await api.post("auth/login", data);
    const token = res.data.data.access_token.access_token;
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(res.data.data))
    return res.data;
  };

  const register = async (data) => {
    const res = await api.post("auth/register", data);
    const token = res.data.data.access_token.access_token;
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(res.data.data))
    return res.data;
  };

  const socialLogin = async (data) => {
    if(data.provider_name && data.provider_id){
      const res = await api.post("auth/social", data);
      const token = res.data.data.access_token.access_token;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(res.data.data))
      return res.data;
    }
    return null;
  };

  const uploadCV = async (cv) => {
    const res = await api.patch("profile/upload-cv", { cv });
    return res.data;
  };
  const update = async (data) => {
    const res = await api.put("profile/update", data);
    return res.data;
  };
  const contactUs = async (data) => {
    const res = await api.post("contact-us", data);
    return res.data;
  };

  return {
    me,
    login,
    register,
    socialLogin,
    uploadCV,
    update,
    contactUs
  };
})();

export default user;
