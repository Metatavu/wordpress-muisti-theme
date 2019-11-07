import { createStyles } from "@material-ui/core";
import theme from "./theme";

export default createStyles({
  root: {
    display: "flex",
    flex: 1,
    position: "relative"
  },
  contentContainer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(45, 45, 45, 0.8)"
  },
  imageContainer: {
      "& img": {
        width: "100%"
      }
  }
});