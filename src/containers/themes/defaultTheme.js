import indigo from "@material-ui/core/colors/indigo";
import green from "@material-ui/core/colors/green";

export default {
  palette: {
    primary: {
      light: indigo[300],
      main: indigo[500],
      dark: indigo[700],
      contrastText: "#fff",
    },
    secondary: {
      light: green[300],
      main: green[700],
      dark: green[700],
      contrastText: "#fff",
    },
  },
  status: {
    danger: "orange",
  },
  typography: {
    button: {
      fontWeight: 400,
      textAlign: "capitalize",
    },
  },
};
