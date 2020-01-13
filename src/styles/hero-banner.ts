import { createStyles } from "@material-ui/core";
import theme from "./theme";

export default createStyles({
  root: {
    height: "100vh",
    overflow: "hidden",
    [theme.breakpoints.up("md")]: {
      height: "90vh"
    }
  },
  heroItem: {
    position: "relative",
    height: "100%",
    backgroundPosition: "center",
    backgroundSize: "cover"
  },
  heroImage: {
    width: "100%"
  },
  heroContent: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    display: "flex",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.4)"
  },
  heroContentBlock: {
    maxWidth: "100vw",
    [theme.breakpoints.up("md")]: {
      maxWidth: "70vw",
    },
    [theme.breakpoints.up("lg")]: {
      maxWidth: "50vw",
    },
    display: "flex",
    marginLeft: "5%",
    marginRight: "5%",
    flexDirection: "column",
    "& h1": {
      [theme.breakpoints.down(414)]: {
        fontSize: "2.5rem"
      },
      [theme.breakpoints.up("xl")]: {}
    }
  },
  heroText: {
    [theme.breakpoints.down(414)]: {
      fontSize: 14
    },
    fontFamily: theme.typography.subtitle2.fontFamily,
    color: theme.palette.primary.main,
    marginBottom: 0,
    [theme.breakpoints.up("lg")]: {
      fontSize: "1rem",
      marginLeft: theme.spacing(1)
    }
  },
  button: {
    width: "100%",
    marginTop: theme.spacing(5),
    fontSize: "1rem",
    [theme.breakpoints.up(413)]: {
      width: 300
    },
    [theme.breakpoints.up("xl")]: {}
  }
});