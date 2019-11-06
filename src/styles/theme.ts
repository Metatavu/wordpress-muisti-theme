import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

export default createMuiTheme({
  palette: {
    primary: {
      main: "#F5EFEA",
      dark: "#26201E"
    },
    secondary: { main: "#C24A49" },
    background: {
      default: "#26201E",
      paper: "#F5EFEA"
    },
    text: {
      primary: "#F5EFEA",
      secondary: "#26201E",
      disabled: "#ddd",
      hint: "#eee"
    }
  },
  typography: {
    fontFamily: "tt_norms_proregular",
    h1: {
      fontFamily: "tt_norms_promedium",
      fontSize: "1.8rem",
      lineHeight: "1.4",
      [theme.breakpoints.up("md")]: {
        fontSize: 55,
      },
      fontWeight: "normal"
    },
    h2: {
      fontFamily: "tt_norms_promedium",
      fontSize: 34,
      fontWeight: "normal"
    },
    h3: {
      fontFamily: "tt_norms_promedium",
      fontSize: 21,
      fontWeight: "normal"
    },
    body1: {
      fontFamily: "tt_norms_proregular",
      fontSize: 14,
      [theme.breakpoints.up("md")]: {
        fontSize: 16,
      },
      fontWeight: "normal"
    },
    body2: {
      fontFamily: "tt_norms_proregular",
      fontSize: 12,
      fontWeight: "normal"
    },
    subtitle2: {
      fontFamily: "tt_norms_promedium",
      fontSize: 21,
      fontWeight: "normal"
    }
  },
  overrides: {
    MuiButton: {
      outlinedPrimary: {
        justifyContent: "space-between",
        textTransform: "initial",
        height: 65,
        borderRadius: 0,
        padding: "5px 15px",
        borderWidth: 2,
          "&:hover": {
            borderWidth: 2,
          },
          "&:active": {
            borderWidth: 2,
          }
      }
    },
    MuiInputBase: {
      input: {
        fontSize: "2rem"
      },
    },
    MuiInputLabel: {
      root: {
        fontSize: "1.6rem",
        color: "#F5EFEA"
      }
    },
    MuiFormLabel: {
      root: {
        color: "#F5EFEA",
        "&$focused": {
          color: "rgba(245, 239, 234, 0.5)"
        }
      }
    },
    MuiInput: {
      underline: {
        "&:before": {
          borderBottom: "3px solid #F5EFEA"
        },
        "&:after": {
          borderBottom: "3px solid rgba(245, 239, 234, 0.8)"
        },
        "&:hover:not($disabled):before": {
          borderBottom: "3px solid rgba(245, 239, 234, 0.2)"
        },
      }
    }
  }
});