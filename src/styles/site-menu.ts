import { createStyles } from "@material-ui/core";
import theme from "./theme";

export default createStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    position: "fixed",
    overflow: "auto",
    top: 100,
    width: "100vw",
    padding: "0 20px",
    height: "calc(100% - 100px)",
    zIndex: 1000,
    [theme.breakpoints.up("md")]: {
      top: 130,
      height: "calc(100% - 130px)",
    },
    backgroundColor: "rgba(45, 45, 45, 0.9)"
  },
  tinyHeader: {
    top: 60,
    height: "calc(100% - 60px)"
  },
  menuContent: {
    display: "flex",
    flexDirection: "column",
    marginTop: 100,
    [theme.breakpoints.up("sm")]: {
      marginLeft: 100,
    },
    [theme.breakpoints.up("md")]: {
      marginLeft: 50,
      marginTop: 110,
      flexDirection: "row",
    },
    [theme.breakpoints.up("lg")]: {
      marginLeft: 250,
      marginTop: 140,
    },
    [theme.breakpoints.up("xl")]: {
      marginLeft: 320,
    },
  },
  menuGroup: {
    display: "flex",
    flexDirection: "column",
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up("md")]: {
      marginRight: 100,
      marginBottom: 0,
    },
    [theme.breakpoints.up("lg")]: {
      marginRight: 100,
    },
    [theme.breakpoints.up("xl")]: {
      marginRight: 100,
    },
  },
  link: {
    marginBottom: "2rem"
  },
  subLink: {
    marginBottom: "1rem"
  },
  controlContainer: {
    display: "flex",
    flexDirection: "row-reverse",
    marginTop: theme.spacing(2),
    position: "fixed",
    right: 18,
    [theme.breakpoints.up("md")]: {
      marginTop: 30,
      marginRight: 60
    },
    [theme.breakpoints.up("lg")]: {
      marginTop: 60,
      marginRight: 100
    },
    [theme.breakpoints.up("xl")]: {
      marginTop: 60,
      marginRight: 140
    },
  },
  searchContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  close: {
    fontSize: 12,
    textTransform: "initial"
  },
  closeIcon: {
    fontSize: 40
  }
});