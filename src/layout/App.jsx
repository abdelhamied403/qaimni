import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { useSelector } from "react-redux";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { Alert } from "@mui/material";
import Head from "next/head";
import * as fbq from "../lib/fpixel";

// Create rtl cache
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [rtlPlugin],
});

const App = (props) => {
  const app = useSelector((state) => state.app);

  return (
    <>
      <Head>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
        <script
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '704092874333142');
          `,
          }}
        />
        <noscript><img height="1" width="1" style="display:none"
        src="https://www.facebook.com/tr?id=704092874333142&ev=PageView&noscript=1"
        /></noscript>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${fbq.FB_PIXEL_ID}&ev=PageView&noscript=1`}
          />
        </noscript>
      </Head>
      <CacheProvider value={cacheRtl}>
        <div
          className={`fixed right-24 top-36 transition-opacity duration-500 ${
            app.alert ? "opacity-100" : "opacity-0"
          }`}
          style={{ zIndex: 1400 }}
        >
          {app.alert && (
            <Alert
              icon={
                app.status === "error" ? (
                  <CancelOutlinedIcon fontSize="inherit" />
                ) : (
                  <CheckCircleOutlineIcon fontSize="inherit" />
                )
              }
              severity={app.status}
            >
              {app.alert}
            </Alert>
          )}
        </div>
        <div dir="rtl">{props.children}</div>
      </CacheProvider>
    </>
  );
};

export default App;
