import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#4791db",
      main: "#1976d2",
      dark: "#115293",
      contrastText: "#fff",
    },
    secondary: {
      light: "#e33371",
      main: "#dc004e",
      dark: "#9a0036",
      contrastText: "#000",
    },
    error: {
      main: "#f44336",
      light: "e57373",
      dark: "d32f2f",
    },
    background: {
      default: "#fff",
    },
  },
});

export default theme;
