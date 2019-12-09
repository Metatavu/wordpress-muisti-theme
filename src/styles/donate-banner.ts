import { createStyles } from "@material-ui/core";
import theme from "./theme";

export default createStyles({
  root: {
    backgroundColor: theme.palette.secondary.main
  },
  donateContent: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      justifyContent: "space-between"
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
      paddingBottom: 0
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
    width: 300,
    height: 60,
    marginTop: theme.spacing(5)
  }
});