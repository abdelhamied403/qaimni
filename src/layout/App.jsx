import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import user from "../services/user";
import { setUser } from "../redux/slices/user.slice";
import { Alert } from "@mui/material";
import { CheckCircleOutline } from "@mui/icons-material";

// Create rtl cache
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [rtlPlugin],
});

const App = (props) => {
  const dispatch = useDispatch();
  const app = useSelector((state) => state.app);

  const auth = async () => {
    const res = await user.me("auth/me");
    dispatch(setUser(res.data));
  };

  useEffect(() => {
    auth();
  }, []);

  return (
    <CacheProvider value={cacheRtl}>
      <div
        className={`fixed z-50 right-24 top-36 transition-opacity duration-500 ${
          app.alert ? "opacity-100" : "opacity-0"
        }`}
      >
        {app.alert && (
          <Alert
            icon={<CheckCircleOutline fontSize="inherit" />}
            severity={app.alert?.type}
          >
            {app.alert?.message}
          </Alert>
        )}
      </div>
      <div dir="rtl">{props.children}</div>
    </CacheProvider>
  );
};

export default App;
