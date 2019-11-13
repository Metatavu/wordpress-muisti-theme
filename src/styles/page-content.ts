import { createStyles } from "@material-ui/core";
import theme from "./theme";

export default createStyles({
  root: {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.primary.dark,
    marginTop: 130,
    display: "flex",
    flex: 1,
    flexDirection: "column"
  },
});