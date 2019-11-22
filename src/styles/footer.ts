import { createStyles } from "@material-ui/core";
import theme from "./theme";

export default createStyles({
  root: {
    display: "flex",
    flex: 1,
    flexDirection: "column"
  },
  footerBackground: {
    backgroundPosition: "center",
    backgroundSize: "cover"
  },
  footerPosts: {
    display: "flex",
    width: "100%",
    backgroundColor: "#000",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row"
    }
  },
  footerPost: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
    paddingLeft: "5%",
    "&:nth-child(1)": {
      backgroundColor: "#2E2E50"
    },
    "&:nth-child(2)": {
      backgroundColor: theme.palette.secondary.main
    }
  },
  footerdata: {
    marginBottom: theme.spacing(5)
  },
  contentContainer: {
    height: "calc( 100vh - 60px )",
    backgroundColor: "rgba(45, 45, 45, 0.8)"
  },
  logoAndSomeContainer: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(10),
    }
  },
  imageContainer: {
      "& img": {
        width: "100%"
      }
  },
  someLinkContainer: {

  },
  button: {
    width: 300
  },
  menuContent: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      marginLeft: 150,
    }
  },
  menuGroup: {
    display: "flex",
    flexDirection: "column",
    marginBottom: theme.spacing(5),
    [theme.breakpoints.up("md")]: {
      marginRight: 100,
    }
  },
  link: {
    marginBottom: "2rem"
  },
  subLink: {
    marginBottom: "1rem"
  },
  contactsMenu: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row"
    },
    "& h3": {
      margin: 0,
      marginBottom: "2rem"
    }
  }
});