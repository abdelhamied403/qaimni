import { useEffect } from "react";
import "../styles/globals.scss";
import { Provider } from "react-redux";
import { store } from "../src/redux/store";
import App from "../src/layout/App";
import { theme } from "../styles/theme";
import { ThemeProvider } from "@mui/material";
import { useRouter } from "next/router";
import { SessionProvider } from "next-auth/react";
import { addResInterceptors } from "../src/services/axios";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const router = useRouter();

  useEffect(() => {
    document.addEventListener("keydown", (evt) => {
      if (evt.ctrlKey && evt.keyCode == 75) {
        evt.preventDefault();
        router.push("/search");
      }
    });
  }, [router]);

  addResInterceptors(store.dispatch);

  return (
    <Provider store={store}>
      <SessionProvider session={session}>
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
      </SessionProvider>
    </Provider>
  );
}

export default MyApp;
