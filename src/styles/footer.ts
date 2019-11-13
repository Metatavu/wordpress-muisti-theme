import { createStyles } from "@material-ui/core";
import theme from "./theme";

export default createStyles({
  root: {
    display: "flex",
    flex: 1,
    flexDirection: "column"
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
  contentContainer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(45, 45, 45, 0.8)"
  },
  logoAndSomeContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(5)
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
    marginLeft: 150,
  },
  menuGroup: {
    display: "flex",
    flexDirection: "column",
    marginRight: 100
  },
  link: {
    marginBottom: "2rem"
  },
  subLink: {
    marginBottom: "1rem"
  },
  contactsMenu: {
    display: "flex",
    flexDirection: "row"
  }
});