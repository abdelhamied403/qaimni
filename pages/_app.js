import { ThemeProvider } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect } from "react";
import RTL from "../src/layout/RTL";
import "../styles/globals.scss";
import { theme } from "../styles/theme";

import Auth from "../src/layout/Auth";
import Page from "../src/layout/Page";
const layouts = {
  Auth,
};

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const Layout = layouts[Component.layout] || Page;

  useEffect(() => {
    document.addEventListener("keydown", (evt) => {
      if (evt.ctrlKey && evt.keyCode == 75) {
        evt.preventDefault();
        router.push("/search");
      }
    });
  }, [router]);
  return (
    <RTL>
      <ThemeProvider theme={theme}>
        <div className="app" dir="rtl">
          <Layout title={Component.name}>
            <Component {...pageProps} />
          </Layout>
        </div>
      </ThemeProvider>
    </RTL>
  );
}

export default MyApp;
