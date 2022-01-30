import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import user from "../services/user";
import { setUser } from "../redux/slices/user.slice";

// Create rtl cache
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [rtlPlugin],
});

const App = (props) => {
  const dispatch = useDispatch();

  const auth = async () => {
    const res = await user.me("auth/me");
    dispatch(setUser(res.data));
  };

  useEffect(() => {
    auth();
  }, []);

  return (
    <CacheProvider value={cacheRtl}>
      <div dir="rtl">{props.children}</div>
    </CacheProvider>
  );
};

export default App;
