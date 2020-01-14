import { createStyles } from "@material-ui/core";
import theme from "./theme";

export default createStyles({
  root: {
    height: "100vh",
    overflow: "hidden",
    [theme.breakpoints.up("md")]: {
      height: "90vh"
    }
  },
  heroItem: {
    position: "relative",
    height: "100%",
    backgroundPosition: "center",
    backgroundSize: "cover"
  },
  heroImage: {
    width: "100%"
  },
  heroContent: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    display: "flex",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.4)"
  },
  heroContentBlock: {
    maxWidth: "100vw",
    [theme.breakpoints.up("md")]: {
      maxWidth: "70vw",
    },
    [theme.breakpoints.up("lg")]: {
      maxWidth: "50vw",
    },
    display: "flex",
    marginLeft: "5%",
    marginRight: "5%",
    flexDirection: "column",
    "& h1": {
      [theme.breakpoints.down(414)]: {
        fontSize: "2.5rem"
      },
      [theme.breakpoints.up("xl")]: {}
    },
    "@media only screen and (max-width:1280px) and (min-width:960px) and (max-height:750px)": {
      marginTop: "130px",
      "& h1": {
        fontSize: "3.5rem"
      }
    }
  },
  hero: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.up("md")]: {
      height: "90vh",
    },
    "& .wp-block-cover": {
      position: "absolute",
      zIndex: -1,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      "&.has-background-dim.hero:before": {
        content: "''",
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        zIndex: 1,
      },
      "& .wp-block-cover__video-background": {
        minWidth: "100%",
        minHeight: "100%"
      }
    }
  },
  heroContentContainer: {
    marginLeft: "5%",
    marginRight: "5%",
    [theme.breakpoints.up("md")]: {
      width: "70vw",
      marginRight: 0,
    },
    [theme.breakpoints.up("lg")]: {
      width: "50vw",
    },
    "& p": {
      fontFamily: theme.typography.subtitle2.fontFamily,
      [theme.breakpoints.up("lg")]: {
        fontSize: "1rem",
        marginLeft: theme.spacing(1)
      }
    }
  },
  heroTitle: {
    margin: 0,
    fontFamily: theme.typography.h1.fontFamily,
    fontWeight: "normal",
    fontSize: "2.5rem",
    lineHeight: 1,
    [theme.breakpoints.up(360)]: {
      fontSize: "2.75rem",
    },
    [theme.breakpoints.up(413)]: {
      fontSize: "3rem",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "4.75rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "4.75rem",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "5.5rem",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "6rem",
      lineHeight: "6.75rem"
    }
  },
  heroText: {
    [theme.breakpoints.down(414)]: {
      fontSize: 14
    },
    fontFamily: theme.typography.subtitle2.fontFamily,
    color: theme.palette.primary.main,
    marginBottom: 0,
    [theme.breakpoints.up("lg")]: {
      fontSize: "1rem",
      marginLeft: theme.spacing(1)
    }
  },
  button: {
    width: "100%",
    marginTop: theme.spacing(5),
    fontSize: "1rem",
    [theme.breakpoints.up(413)]: {
      width: 300
    },
    [theme.breakpoints.up("xl")]: {}
  }
});