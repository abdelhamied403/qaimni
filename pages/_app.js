import { useEffect } from "react";
import "../styles/globals.scss";
import { Provider } from "react-redux";
import { store } from "../src/redux/store";
import App from "../src/layout/App";
import { theme } from "../styles/theme";
import { ThemeProvider } from "@mui/material";
import { useRouter } from "next/router";
import { SessionProvider } from "next-auth/react";
import { addInterceptors } from "../src/services/axios";
import { initUser } from "../src/redux/slices/user.slice";
import * as ga from '../src/lib/ga';
import * as fbq from '../src/lib/fpixel'


function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const router = useRouter();

  useEffect(() => {
    document.addEventListener("keydown", (evt) => {
      if (evt.ctrlKey && evt.keyCode == 81) {
        evt.preventDefault();
        router.push("/search");
      }
    });

    fbq.pageview()

    const handleRouteChange = (url) => {
      ga.pageview(url);
      fbq.pageview()
    }

    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on('routeChangeComplete', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }

  }, [router, router.events]);
  useEffect(() => {
    store.dispatch(initUser())
  }, []);

  addInterceptors(store.dispatch);

  return (
    <Provider store={store}>
      <SessionProvider session={session}>
        <App>
          <ThemeProvider theme={theme}>
            {Component.Layout ? (
              <Component.Layout title={Component.DisplayName || Component.name}>
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
