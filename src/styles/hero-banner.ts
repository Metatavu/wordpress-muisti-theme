import { createStyles } from "@material-ui/core";
import theme from "./theme";

export default createStyles({
  root: {
    height: "90vh",
    overflow: "hidden"
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
    backgroundImage: "linear-gradient(to right, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0))"
  },
  heroContentBlock: {
    maxWidth: "100vw",
    [theme.breakpoints.up("md")]: {
      maxWidth: "70vw",
    },
    display: "flex",
    marginLeft: "5%",
    flexDirection: "column"
  },
  heroText: {
    fontSize: theme.typography.body1.fontSize,
    color: theme.palette.primary.main,
    marginBottom: 0
  },
  button: {
    width: 300,
    marginTop: theme.spacing(5),
  }
});