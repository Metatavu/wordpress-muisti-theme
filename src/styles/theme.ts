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
    fontFamily: "'tt_norms_proregular', sans-serif",
    h1: {
      fontFamily: "'tt_norms_promedium', sans-serif",
      fontWeight: "normal"
    },
    h2: {
      fontFamily: "'tt_norms_promedium', sans-serif",
      fontWeight: "normal"
    },
    h3: {
      fontFamily: "'tt_norms_promedium', sans-serif",
      fontWeight: "normal"
    },
    h4: {
      fontFamily: "'tt_norms_promedium', sans-serif",
      fontWeight: "normal"
    },
    h5: {
      fontFamily: "'tt_norms_promedium', sans-serif",
      fontWeight: "normal"
    },
    h6: {
      fontFamily: "'tt_norms_promedium', sans-serif",
      fontWeight: "normal"
    },
    body1: {
      fontFamily: "'tt_norms_proregular', sans-serif",
      fontWeight: "normal"
    },
    body2: {
      fontFamily: "'tt_norms_proregular', sans-serif",
      fontWeight: "normal"
    },
    subtitle1: {
      fontFamily: "'tt_norms_proregular', sans-serif",
      fontWeight: "normal"
    },
    subtitle2: {
      fontFamily: "'tt_norms_promedium', sans-serif",
      fontWeight: "normal"
    }
  },
  overrides: {
    MuiButton: {
      label: {
        fontSize: "1rem",
        whiteSpace: "nowrap",
        fontFamily: "'tt_norms_proregular', sans-serif"
      },
      text: {
        fontFamily: theme.typography.h1.fontFamily,
        fontSize: theme.typography.h6.fontSize
      },
      outlinedPrimary: {
        justifyContent: "space-between",
        textTransform: "initial",
        height: 55,
        borderRadius: 0,
        padding: "5px 15px",
        border: "1px solid rgba(245, 239, 234, 0.8)",
        borderWidth: 3,
        "&:hover": {
          borderWidth: 3,
        },
        "&:active": {
          borderWidth: 3,
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