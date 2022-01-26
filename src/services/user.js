import api from "./axios";

const user = (() => {
  const me = async () => {
    const res = await api.get("auth/me");
    return res.data;
  };

  const login = async (phone, password) => {
    const res = await api.post("auth/login", {
      phone,
      password,
    });
    const token = res.data.data.access_token.access_token;
    localStorage.setItem("token", token);
    return res.data;
  };

  const register = async (data) => {
    const res = await api.post("auth/register", data);
    return res.data;
  };

  const socialLogin = async () => {};

  return {
    me,
    login,
    register,
    socialLogin,
  };
})();

export default user;
