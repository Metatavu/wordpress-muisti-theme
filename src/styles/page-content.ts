import { createStyles } from "@material-ui/core";
import theme from "./theme";

export default createStyles({
  hero: {
    height: "100vh",
    position: "relative",
    "& .wp-block-cover": {
      display: "flex",
      height: "100vh",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      position: "relative",
      alignItems: "center",
      "&.has-background-dim.hero:before": {
        content: "''",
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: theme.palette.primary.dark,
        opacity: .5,
        zIndex: 1,
      },
      "& .wp-block-cover__inner-container": {
        zIndex: 2,
        margin: theme.spacing(5),
        [theme.breakpoints.up("md")]: {
          margin: theme.spacing(10)
        }
      },
    }
  },
  content: {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.primary.dark,
    marginTop: 100,
    [theme.breakpoints.up("md")]: {
      marginTop: 130,
    },
    display: "flex",
    flex: 1,
    flexDirection: "column"
  },
  contentWithHero: {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.primary.dark,
    marginTop: 0,
    display: "flex",
    flex: 1,
    flexDirection: "column"
  },
  title: {
    fontFamily: theme.typography.h1.fontFamily,
    fontWeight: "normal",
    fontSize: theme.typography.h4.fontSize,
    [theme.breakpoints.up("md")]: {
      fontSize: theme.typography.h3.fontSize,
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: theme.typography.h2.fontSize,
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: theme.typography.h1.fontSize,
    }
  },
  heroTitle: {
    position: "absolute",
    top: "42%",
    transform: "translateY( -100% )",
    margin: 0,
    marginLeft: 38,
    zIndex: 2,
    fontFamily: theme.typography.h1.fontFamily,
    fontWeight: "normal",
    fontSize: theme.typography.h4.fontSize,
    [theme.breakpoints.up("md")]: {
      top: "50%",
      marginLeft: 70,
      fontSize: theme.typography.h3.fontSize,
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: theme.typography.h2.fontSize,
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: theme.typography.h1.fontSize,
    }
  },
  htmlContainer: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10),
    display: "flex",
    flexDirection: "column",
    "& h2": {
      margin: 0,
      fontSize: theme.typography.h4.fontSize,
      fontFamily: theme.typography.h2.fontFamily,
      fontWeight: "normal",
      [theme.breakpoints.up("md")]: {
        fontSize: theme.typography.h2.fontSize,
        width: "80%",
        alignSelf: "center"
      },
      "&.address-heading": {
        width: "100%",
        alignSelf: "start"
      }
    },
    "& p": {
      alignSelf: "center",
      [theme.breakpoints.up("md")]: {
        width: "80%"
      }
    },
    "& strong": {
      whiteSpace: "nowrap"
    },
    "& ul": {
      listStyle: "none",
      padding: 0
    },
    "& hr": {
      marginBottom: theme.spacing(5),
      width: "100%",
    },
    "& .wp-block-image": {
      margin: 0,
      "& img": {
        width: "100%"
      }
    },
    "& .wp-block-columns": {
      display: "grid",
      gridAutoFlow: "row",
      [theme.breakpoints.up("md")]: {
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(10),
        gridAutoFlow: "column",
      },
      "&.has-2-columns": {
        [theme.breakpoints.up("md")]: {
          gridTemplateColumns: "1fr 1fr",
          gridGap: theme.spacing(10)
        },
        "&.address-info": {
          gridTemplateColumns: "200px 200px",
          marginTop: theme.spacing(10),
          marginBottom: theme.spacing(5)
        }
      }
    },
    "& .wp-block-column": {
      display: "flex",
      marginBottom: theme.spacing(5),
      [theme.breakpoints.up("md")]: {
        marginBottom: 0,
        "& .wp-block-image": {
          display: "flex",
        }
      }
    },
    "& .address-info .wp-block-column": {
      marginRight: 0,
      flexDirection: "column",
      "& p": {
        width: "initial",
        alignSelf: "start",
        margin: 0,
        fontSize: "1.2rem",
        lineHeight: "1.8rem"
      }
    },
    "& .contact-card": {
      "& p": {
        width: "initial",
        alignSelf: "start"
      }
    },
    "& .wp-block-media-text": {
      display: "grid",
      justifyContent: "flex-start",
      gridAutoFlow: "row",
      [theme.breakpoints.up("md")]: {
        gridAutoFlow: "column",
      },
    },
    "& .wp-block-media-text__media": {
      display: "flex",
      width: 160,
      height: 160,
      margin: 0,
      "& img": {
        width: "100%",
        alignSelf: "center"
      }
    },
    "& .wp-block-media-text__content": {
      marginLeft: 0,
      [theme.breakpoints.up("md")]: {
        marginLeft: theme.spacing(5),
      },
      "& h3": {
        fontSize: "2rem",
        margin: 0,
        marginBottom: "2rem",
        fontWeight: "normal",
        fontFamily: theme.typography.h2.fontFamily,
        [theme.breakpoints.up("md")]: {
          whiteSpace: "nowrap"
        },
      }
    },
    /**
     * Flex Posts styles
     */
    "& .fp-flex": {
      display: "flex",
      justifyContent: "flex-start",
      flexDirection: "row",
      flexWrap: "wrap",
      alignItems: "flex-start",
    },
    "& .fp-row": {
      marginLeft: -15,
      marginRight: -15,
    },
    "& .fp-post": {
      marginBottom: 20,
    },
    "& .fp-col": {
      minWidth: 200,
      maxWidth: 400,
      flex: "1 1 30%",
      marginLeft: 15,
      marginRight: 15,
    },
    "& .fp-col:empty": {
      height: 0,
      visibility: "hidden",
      margintop: 0,
      marginBottom: 0,
    },
    "& .fp-list-1 .fp-flex, .fp-list-3 .fp-flex": {
      flexWrap: "nowrap",
    },
    "& .fp-list-1 .fp-media, .fp-list-3 .fp-extra .fp-media": {
      flexShrink: 0,
    },
    "& .fp-thumbnail": {
      display: "block",
      transition: "opacity 500ms ease",
    },
    "& .fp-list-1 .fp-thumbnail, .fp-list-3 .fp-extra .fp-thumbnail": {
      marginRight: "1em",
    },
    "& .fp-thumbnail:hover": {
      opacity: 0.8,
    },
    "& .fp-thumbnail img": {
      display: "block",
      width: "100%",
      objectFit: "cover",
      overflow: "hidden",
    },
    "& .fp-media .fp-thumbnail img": {
      margin: 0,
    },
    "& .fp-thumbnail img.size-thumbnail": {
      width: 85,
      height: 85,
    },
    "& .fp-list-2 .fp-media + .fp-body, .fp-list-3 .fp-main .fp-media + .fp-body": {
      marginTop: "0.8em",
    },
    "& .fp-title": {
      fontFamily: theme.typography.h4.fontFamily,
      fontSize: theme.typography.h4.fontSize,
      margin: 0,
    },
    "& .fp-list-2 .fp-title, .fp-list-3 .fp-main .fp-title, .fp-list-4 .fp-title": {
      fontWeight: 500,
    },
    "& .fp-list-4 .fp-post": {
      marginLeft: -10,
      marginRight: -10,
    },
    "& .fp-list-4 .fp-media": {
      flex: "1 0 40%",
      minWidth: 150,
      maxWidth: 300,
      marginLeft: 10,
      marginRight: 10,
      marginBottom: "0.8em",
    },
    "& .fp-list-4 .fp-body": {
      flex: "1 0 50%",
      marginLeft: 10,
      marginRight: 10,
    },
    "& .fp-title a": {
      color: theme.palette.primary.dark,
      textDecoration: "none",
    },
    "& .fp-excerpt": {
      margintop: "0.4em",
      opacity: 0.8,
    },
    "& .fp-meta": {
      marginTop: "0.1em",
    },
    "& .fp-meta a": {
      opacity: 0.5,
      color: theme.palette.primary.dark,
      textDecoration: "none",
    },
    "& .fp-comments > span": {
      opacity: 0.5,
    },
    "& .fp-meta a:hover": {
      opacity: 0.8,
    },
    "& .fp-meta > span:before": {
      content: "\a0\b7\a0",
      opacity: 0.5,
    },
    "& .fp-meta > span:first-child:before": {
      content: "",
    },
    "& .fp-categories": {
      display: "block",
      fontSize: "0.7em",
      margin: 0,
      opacity: 0.7,
      texttransform: "uppercase",
      letterspacing: "0.2em",
    },
    "& .fp-post .fp-readmore": {
      marginTop: "0.5em",
    },
    "& .fp-post .fp-readmore-link": {
      textDecoration: "none",
      fontSize: "0.9em",
      display: "inline-block",
      borderWidth: "1px",
      borderStyle: "solid",
      padding: "0.2em 0.7em",
      borderRadius: 3,
    },
    "& .fp-post .fp-readmore-link:hover": {
      textDecoration: "none",
    }
  }
});