import { createStyles } from "@material-ui/core";
import theme from "./theme";

export default createStyles({
  root: {
    alignItems: "center",
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    flexDirection: "column",
    padding: "50px 0",
    [theme.breakpoints.up("md")]: {
      padding: "150px 50px 50px",
    }
  },
  latestNewsHeading: {
    color: theme.palette.primary.dark
  },
  latestNewsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 50,
    [theme.breakpoints.up("md")]: {
      marginTop: 100,
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column"
    }
  },
  latestNewsItem: {
    cursor: "pointer",
    display: "flex",
    flex: 1,
    flexDirection: "column",
    maxWidth: 480,
    margin: "0 5%",
    [theme.breakpoints.up("md")]: {
      margin: "0 30px",
    },
    [theme.breakpoints.up("lg")]: {
      margin: "0 55px",
    }
  },
  latestNewsImgContainer: {
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: 150,
    [theme.breakpoints.only("sm")]: {
      height: 200
    },
    [theme.breakpoints.up("md")]: {
      height: 250
    },
    [theme.breakpoints.up("lg")]: {
      height: 300
    }
  },
  title: {
    fontSize: 22,
    fontFamily: theme.typography.h1.fontFamily,
    color: theme.palette.primary.dark
  },
  tag: {
    margin: "10px 0"
  }
});