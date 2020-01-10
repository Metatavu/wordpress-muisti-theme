import { createStyles } from "@material-ui/core";
import theme from "./theme";

export default createStyles({
  root: {},
  footerBackground: {
    backgroundPosition: "center",
    backgroundSize: "cover"
  },
  footerPosts: {
    display: "flex",
    width: "100%",
    backgroundColor: "#000",
    flexDirection: "column",
    overflow: "hidden",
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
    },
    "&:nth-child(3)": {
      backgroundColor: "#2E2E50",
      paddingTop: 0,
      paddingLeft: 0
    }
  },
  footerdata: {
    width: 300,
    marginBottom: theme.spacing(5)
  },
  carouselWrapper: {
    position: "relative"
  },
  carouselItem: {
    position: "absolute",
    top: 0,
    maxWidth: "50%"
  },
  carouselImg: {
    maxWidth: "100%"
  },
  carouselTitle: {
    paddingTop: theme.spacing(5),
    paddingLeft: theme.spacing(1),
    marginLeft: "55%"
  },
  contentContainer: {
    [theme.breakpoints.up("md")]: {
      height: "calc( 100vh - 60px )",
      padding: theme.spacing(10)
    },
    backgroundColor: "rgba(45, 45, 45, 0.8)"
  },
  logoAndSomeContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: theme.spacing(5),
    paddingTop: 20,
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
      justifyContent: "none",
    },
    [theme.breakpoints.up("md")]: {
      paddintTop: 0
    }
  },
  imageContainer: {
      "& img": {
        width: "100%"
      }
  },
  someLinkContainer: {
    margin: theme.spacing(2)
  },
  someLink: {
    color: "#ffffff"
  },
  iconLink: {
    fontSize: "2rem",
    float: "right",
    marginLeft: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      fontSize: "2.2rem",
      marginLeft: theme.spacing(3)
    }
  },
  logo: {
    float: "left"
  },
  button: {
    [theme.breakpoints.down(414)]: {
      width: "100%"
    },
    width: 300
  },
  menuContent: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap-reverse",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },
    [theme.breakpoints.up("lg")]: {
      marginLeft: 150,
      flexWrap: "nowrap",
    }
  },
  menuGroup: {
    display: "flex",
    flexDirection: "column",
    marginBottom: theme.spacing(5),
    [theme.breakpoints.up("sm")]: {
      marginRight: 60,
    },
    [theme.breakpoints.up("md")]: {
      marginRight: 100,
    },
    [theme.breakpoints.up("lg")]: {},
    "&:last-child": {
      marginRight: 0
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
    }
  }
});