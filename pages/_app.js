import { useEffect } from "react";
import "../styles/globals.scss";
import { Provider } from "react-redux";
import { store } from "../src/redux/store";
import App from "../src/layout/App";
import { theme } from "../styles/theme";
import { ThemeProvider } from "@mui/material";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    document.addEventListener("keydown", (evt) => {
      if (evt.ctrlKey && evt.keyCode == 75) {
        evt.preventDefault();
        router.push("/search");
      }
    });
  }, [router]);

  return (
    <Provider store={store}>
      <App>
        <ThemeProvider theme={theme}>
          {Component.Layout ? (
            <Component.Layout title={Component.name}>
              <Component {...pageProps} />
            </Component.Layout>
          ) : (
            <Component {...pageProps} />
          )}
        </ThemeProvider>
      </App>
    </Provider>
  );
}

export default MyApp;
