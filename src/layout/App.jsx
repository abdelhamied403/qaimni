import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { useSelector } from "react-redux";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { Alert } from "@mui/material";

// Create rtl cache
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [rtlPlugin],
});

const App = (props) => {
  const app = useSelector((state) => state.app);

  return (
    <CacheProvider value={cacheRtl}>
      <div
        className={`fixed z-50 right-24 top-36 transition-opacity duration-500 ${
          app.alert ? "opacity-100" : "opacity-0"
        }`}
      >
        {app.alert && (
          <Alert
            icon={<CancelOutlinedIcon fontSize="inherit" />}
            severity="error"
          >
            {app.alert}
          </Alert>
        )}
      </div>
      <div dir="rtl">{props.children}</div>
    </CacheProvider>
  );
};

export default App;
