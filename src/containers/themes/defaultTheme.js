import indigo from "@material-ui/core/colors/indigo";
import pink from "@material-ui/core/colors/pink";
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
      light: pink[300],
      main: pink[500],
      dark: pink[700],
      contrastText: "#fff",
    },
    success: {
      light: green[500],
      main: green[700],
      dark: green[900],
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
