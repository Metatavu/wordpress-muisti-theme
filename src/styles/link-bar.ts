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
    minHeight: 80,
    borderBottomWidth: 3,
    borderBottomStyle: "solid",
    borderBottomColor: theme.palette.primary.dark
  },

  slideText: {
    display: "flex",
    maxWidth: "100%"
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
  },

  circle: {
    position: "relative",
    border: "1px solid #000000",
    width: "1.25rem",
    height: "1.25rem",
    borderRadius: "50%"
  },

  ball: {
    position: "absolute",
    left: "50%",
    top: "50%",
    backgroundColor: "#000000",
    width: "0.9rem",
    height: "0.9rem",
    borderRadius: "50%",
    transition: "transform 0.2s ease-out",
    transform: "translate3d(-50%, -50%, 0) scale(0)"
  },

  fill: {
    backgroundColor: "#000000",
    width: "0.9rem",
    height: "0.9rem",
    borderRadius: "50%",
    transition: "transform 0.2s ease-out",
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate3d(-50%, -50%, 0) scale(1)"
  }
});