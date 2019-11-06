import { createStyles } from "@material-ui/core";
import theme from "./theme";

export default createStyles({
  root: {
    display: "flex",
    backgroundColor: theme.palette.secondary.main,
    [theme.breakpoints.up("md")]: {
      flexDirection: "row"
    }
  },
  donateItem: {},
  donateContent: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row"
    }
  },
  donateContentBlock: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    paddingTop: "2.5%",
    paddingLeft: "5%",
    paddingRight: "5%",
    paddingBottom: 50,
    [theme.breakpoints.up("sm")]: {
      paddingBottom: 100,
    },
    [theme.breakpoints.up("md")]: {
      paddinbgBottom: 0
    }
  },
  textContainer: {},
  imageContainer: {
    display: "flex",
    flex: 1,
      "& img": {
        width: "100%"
      }
  },
  button: {
    width: 280,
    height: 60
  }
});