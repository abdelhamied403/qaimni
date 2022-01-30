import axios from "axios";
import Router from "next/router";
import { setLoading, setAlert } from "../redux/slices/app.slice";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
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
  api.interceptors.request.use((config) => {
    const lang = localStorage.getItem("LANG") || "ar";
    const token = localStorage.getItem("token");
    config.headers = {
      ...config.headers,
      lang,
      Authorization: `Bearer ${token}`,
    };
    dispatch(setLoading(true))
    dispatch(setAlert(null))
    
    return config;
  });

  api.interceptors.response.use(
    (response) => {
      dispatch(setLoading(false))
      return response
    },
    (error) => {
      dispatch(setLoading(false))
      dispatch(setAlert(error?.message || error?.toString() || "something went wrong"))
      setTimeout(() => {
        dispatch(setAlert(null))
      }, 3000);
      if (error?.response?.status === 401) {
        if (!publicRoutes.includes(Router.pathname)) {
          Router.push("/auth/login");
        }
      }
      
      if (error?.response?.data) {
        return Promise.reject(error.response.data);
      }
      return Promise.reject(error?.message);
    }
  );
};

api.interceptors.response.use(
  (res) => res,
  (error) => {
    if (error?.response?.status === 401) {
      if (!publicRoutes.includes(Router.pathname)) {
        Router.push("/auth/login");
      }
    }
    
    if (error?.response?.data) {
      return Promise.reject(error.response.data);
    }
    return Promise.reject(error?.message);
  }
);

export default api;
