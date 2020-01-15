import { createStyles } from "@material-ui/core";
import theme from "./theme";

export default createStyles({
  slide: {
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    minHeight: 200,
    color: theme.palette.text.secondary,
  },
  link: {
    color: theme.palette.primary.dark,
  },
  linkContainer: {
    display: "flex",
    flexDirection: "row"
  },
  slideContent: {
    cursor: "pointer",
    display: "flex",
    justifyContent: "space-between",
    height: 80,
    borderBottomWidth: 3,
    borderBottomStyle: "solid",
    borderBottomColor: theme.palette.primary.dark
  },
  slideText: {
    display: "flex",
    maxWidth: "60%"
  },
  linkBallIndicators: {
    display: "flex",
    justifyContent: "flex-end",
    color: theme.palette.primary.dark,
    backgroundColor: theme.palette.background.paper,
    paddingBottom: theme.spacing(3)
  },
  indicator: {
    marginLeft: theme.spacing(1)
  }
});