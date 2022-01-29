import axios from "axios";
import Router from "next/router";
import { setAlert } from "../redux/slices/app.slice";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
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

const publicRoutes = [
  "/",
  "/auth/login",
  "/auth/signup",
  "/blog",
  "/search",
  "/categories",
];

export const addResInterceptors = (dispatch) => {
  api.interceptors.response.use(
    (res) => res,
    (error) => {
      if (error?.response?.status === 401) {
        if (!publicRoutes.includes(Router.pathname)) {
          Router.push("/auth/login");
        }
      }
      if (error?.response?.status === 500) {
        dispatch(
          setAlert({
            type: "error",
            message: "please contact support",
          })
        );
      } else {
        dispatch(
          setAlert({
            type: "error",
            message: error?.response?.data.message,
          })
        );
      }

      setTimeout(() => {
        dispatch(setAlert(null));
      }, 2000);

      if (error?.response?.data) {
        return Promise.reject(error.response.data);
      }
      return Promise.reject(error?.message);
    }
  );
};

export default api;
