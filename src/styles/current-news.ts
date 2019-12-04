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
      padding: "150px 0 50px",
    },
    [theme.breakpoints.up("md")]: {
      padding: "150px 0 50px",
    },
    [theme.breakpoints.up("lg")]: {
      padding: "150px 0 50px",
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
      marginBottom: theme.spacing(10),
      width: "80%"
    },
  },
  button: {
    width: 300,
    color: "#000",
    borderColor: "#111",
    "&:hover": {
      borderColor: "#000",
      backgroundColor: "rgba(0, 0, 0, 0.2)"
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
    },
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: theme.spacing(10),
      marginBottom: theme.spacing(10),
      width: "80%"
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
    textDecoration: "none",
    padding: theme.spacing(2),
    width: 300,
    marginBottom: theme.spacing(5),
    [theme.breakpoints.up("sm")]: {
      width: "auto",
      maxWidth: 470,
      marginBottom: 0,
      transition: "box-shadow 0.4s ease-out, transform 0.2s ease-out",
      "&:hover": {
        transform: "scale(1.01)",
        boxShadow: "0 0 20px rgba(0, 0, 0, 0.2)"
      }
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
    marginBottom: theme.spacing(2),
    height: 220,
    [theme.breakpoints.up("sm")]: {
      height: 200
    },
    [theme.breakpoints.up("md")]: {
      height: 250
    },
    [theme.breakpoints.up("lg")]: {
      height: 320
    }
  },
  title: {
    color: theme.palette.primary.dark
  },
  tag: {
    margin: "10px 0"
  }
});