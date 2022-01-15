import { ThemeProvider } from "@mui/material";
import RTL from "../src/layout/RTL";
import "../styles/globals.scss";
import { theme } from "../styles/theme";

function MyApp({ Component, pageProps }) {
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
