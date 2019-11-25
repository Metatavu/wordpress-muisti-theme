import { createStyles } from "@material-ui/core";
import theme from "./theme";

export default createStyles({
  root: {
    alignItems: "center",
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    flexDirection: "column",
    padding: "50px 20px",
    [theme.breakpoints.up("sm")]: {
      padding: "150px 40px 50px",
    },
    [theme.breakpoints.up("md")]: {
      padding: "150px 120px 50px",
    },
    [theme.breakpoints.up("lg")]: {
      padding: "150px 180px 50px",
    }
  },
  buttonContainer: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    marginBottom: theme.spacing(5),
    [theme.breakpoints.up("sm")]: {
      justifyContent: "flex-end",
    },
    [theme.breakpoints.up("md")]: {
      marginBottom: theme.spacing(10)
    },
  },
  latestNewsContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    justifyContent: "center",
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    [theme.breakpoints.up("md")]: {
      marginTop: theme.spacing(10),
      marginBottom: theme.spacing(10)
    }
  },
  latestNewsHeading: {
    color: theme.palette.primary.dark
  },
  latestNewsItem: {
    cursor: "pointer",
    display: "flex",
    flex: 1,
    flexDirection: "column",
    alignSelf: "center",
    width: 300,
    marginBottom: theme.spacing(5),
    [theme.breakpoints.up("sm")]: {
      width: "auto",
      maxWidth: 400,
      marginBottom: 0,
    },
    "&:first-child": {
      [theme.breakpoints.up("sm")]: {
        marginRight: theme.spacing(2)
      }
    },
    "&:last-child": {
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(2)
      }
    }
  },
  latestNewsImgContainer: {
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: 220,
    [theme.breakpoints.up("sm")]: {
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