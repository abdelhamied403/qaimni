import { createTheme } from "@mui/material";

export const theme = createTheme({
  shadows: new Array(25).fill("none"),
  palette: {
    type: "light",
    primary: {
      main: "#06BDCB",
    },
    accent: {
      main: "#F5E632",
    },
  },
  typography: {
    fontFamily: [
      "Cairo",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  direction: "rtl",
  props: {
    MuiTooltip: {
      arrow: true,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
});
