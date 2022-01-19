import { ThemeProvider } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect } from "react";
import RTL from "../src/layout/RTL";
import "../styles/globals.scss";
import { theme } from "../styles/theme";

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    document.addEventListener("keydown",(evt) => {
      if (evt.ctrlKey && evt.keyCode==75){
        evt.preventDefault();
        router.push("/search")
      }
    })
  }, [router])
  return (
    <RTL>
      <ThemeProvider theme={theme}>
        <div className="app" dir="rtl">
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </RTL>
  );
}

export default MyApp;
