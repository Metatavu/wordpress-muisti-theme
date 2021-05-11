import { createStyles } from "@material-ui/core";
import theme from "./theme";

export default createStyles({

  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(6, 4),
    [theme.breakpoints.up("md")]: {
      alignItems: "flex-start",
      justifyContent: "space-evenly",
      padding: theme.spacing(12, 6),
      flexDirection: "row",
    }
  },

  item: {
    maxWidth: 470,
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up("md")]: {
      maxWidth: 380,
      marginBottom: 0
    },
    [theme.breakpoints.up(1200)]: {
      maxWidth: 420,
    },
    [theme.breakpoints.up("lg")]: {
      maxWidth: 470,
    }
  },

  imageContainer: {
    marginTop: theme.spacing(4),
    width: "100%",
    height: 320,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    [theme.breakpoints.up("md")]: {
      height: 280,
    },
    [theme.breakpoints.up(1000)]: {
      height: 320,
    }
  },

  button: {
    [theme.breakpoints.down(414)]: {
      width: "100%"
    },
    fontSize: "1rem",
    width: 300,
    height: 60,
    marginTop: theme.spacing(2)
  }

});