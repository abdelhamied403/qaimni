import axios from "axios";

const api = axios.create({
  baseURL: "https://qaimni.pixagrama.tk/api/user",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const lang = localStorage.getItem("LANG") || "ar";
  const token = localStorage.getItem("token");
  config.headers = {
    ...config.headers,
    lang,
    Authorization: `Bearer ${token}`,
  };
  return config;
});

export default api;
