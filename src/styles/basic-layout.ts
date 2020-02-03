import { createStyles } from "@material-ui/core";
import theme from "./theme";

export default createStyles({
  root: {
    height: "100vh"
  },
  content: {
    display: "flex",
    flexDirection: "column"
  },
  appBar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 100,
    backgroundColor: "transparent",
    padding: "0 20px",
    borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
    transition: "height 0.3s ease-out, background-color 0.3s ease-out",
    [theme.breakpoints.up("md")]: {
      padding: "0 40px",
      height: 130,
    },
    [theme.breakpoints.up("lg")]: {
      padding: "0 80px",
    }
  },
  smallAppBar: {
    height: 60,
    backgroundColor: "rgba(45, 45, 45, 0.9)",
    "& .MuiTypography-h6": {}
  },
  headerSection: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "space-between",
    }
  },
  logo: {
    height: 60,
    transition: "height 0.3s ease-out",
    [theme.breakpoints.up("md")]: {
      height: 80,
    }
  },
  smallLogo: {
    height: 40
  },
  menuButton: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    }
  },
  localeMenu: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between"
  },
  nav: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    [theme.breakpoints.up("lg")]: {
      marginLeft: 30,
    },
    [theme.breakpoints.up("xl")]: {
      marginLeft: 50,
    }
  },
  navLink: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 20,
    whiteSpace: "nowrap",
    height: 80,
    textDecoration: "none",
    fontFamily: theme.typography.h3.fontFamily,
    color: theme.palette.primary.main,
    cursor: "pointer",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.15rem"
    },
    [theme.breakpoints.up("lg")]: {
      marginLeft: 30,
    },
    [theme.breakpoints.up("xl")]: {
      marginLeft: 40,
    }
  },
  topNavDesktop: {
    display: "flex"
  },
  donate: {
    display: "flex",
    justifyContent: "space-between",
    width: "auto",
    borderRadius: 0,
    boxShadow: "0 0 0 transparent",
    color: "#fff",
    textTransform: "initial",
    marginRight: theme.spacing(2),
    backgroundColor: theme.palette.secondary.main,
    "&:hover": {
      backgroundColor: "#b53e3d"
    },
    "&:active": {
      backgroundColor: "#b53e3d",
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgba(255, 255 ,255 , 0.5)",
    },
    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.up("lg")]: {
      width: 200,
      marginRight: theme.spacing(5),
    },
  }
});