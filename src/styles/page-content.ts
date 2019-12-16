import { createStyles } from "@material-ui/core";
import theme from "./theme";

export default createStyles({
  /**
   * Page styles
   */
  root: {
    "&.article": {
      [theme.breakpoints.up("md")]: {
        width: "70vw",
      },
      [theme.breakpoints.up("lg")]: {
        width: "50vw",
      },
      [theme.breakpoints.up("xl")]: {
        width: "50vw",
      }
    }
  },
  hero: {
    height: "90vh",
    display: "flex",
    alignItems: "center",
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
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        zIndex: 1,
      },
    }
  },
  heroContentContainer: {
    marginLeft: "5%",
    [theme.breakpoints.up("md")]: {
      width: "70vw",
      marginLeft: "5%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "50vw",
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
    fontSize: "2rem",
    lineHeight: 1,
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      fontSize: "4.75rem",
      textAlign: "left",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "5.5rem",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "6rem",
    },
    "&.article": {
      textAlign: "left",
      [theme.breakpoints.up("md")]: {
        fontSize: "2rem",
        lineHeight: "2.5rem",
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: "2.5rem",
        lineHeight: "3rem",
      },
      [theme.breakpoints.up("xl")]: {
        fontSize: "3rem",
        lineHeight: "3.5rem",
      },
    }
  },
  heroTitle: {
    margin: 0,
    fontFamily: theme.typography.h1.fontFamily,
    fontWeight: "normal",
    fontSize: "2.5rem",
    lineHeight: 1,
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
  button: {
    width: 300,
    marginTop: theme.spacing(5),
  },
  errorText: {},
  htmlContainer: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("sm")]: {
      marginBottom: theme.spacing(5),
    },
    [theme.breakpoints.up("md")]: {
      marginBottom: theme.spacing(5),
    },
    [theme.breakpoints.up("lg")]: {
      marginBottom: theme.spacing(5),
    },
    [theme.breakpoints.up("xl")]: {
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(10),
    },
    "& .address-heading": {
      fontSize: 20,
      margin: 0
    },
    "&.article": {
      marginTop: theme.spacing(5),
      [theme.breakpoints.up("md")]: {
        marginBottom: theme.spacing(10),
      },
      [theme.breakpoints.up("lg")]: {
        marginBottom: theme.spacing(12),
      },
      "& h2": {
        width: "100%"
      },
      "& p": {
        width: "100%",
        fontSize: 16,
        "&.has-medium-font-size": {
          fontSize: 20,
          marginBottom: 0,
          [theme.breakpoints.up("md")]: {
            marginBottom: theme.spacing(2)
          }
        },
      },
      "& .wp-block-quote": {
        marginLeft: 0,
        marginRight: 0,
        marginTop: 0,
        marginBottom: 0,
        [theme.breakpoints.up("md")]: {},
        "& p": {
          fontFamily: theme.typography.h1.fontFamily,
          fontSize: "2rem",
          color: theme.palette.secondary.main
        }
      },
      "& .wp-block-media-text": {
        marginTop: theme.spacing(5),
        [theme.breakpoints.up("sm")]: {
          gridTemplateColumns: "1fr 2fr",
        },
        "&.is-vertically-aligned-top": {
          alignItems: "flex-start",
        },
        "&.is-image-fill .wp-block-media-text__media": {
          width: "100%",
          height: "100%",
          backgroundSize: "cover",
          backgroundRepeat: "none",
          "& img": {
            display: "none"
          }
        }
      },
      "& .wp-block-media-text__media": {
        width: "initial",
        height: "initial",
        [theme.breakpoints.down("md")]: {
          marginBottom: theme.spacing(4)
        }
      },
        "& .wp-block-media-text__content": {
          [theme.breakpoints.up("sm")]: {
            marginLeft: theme.spacing(5),
          },
          "& p:first-child": {
            marginTop: 0
          }
        }
    },
    "&.fullscreen": {
      marginTop: 0,
      marginBottom: 0,
    },
    "& h2": {
      margin: 0,
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(5),
      fontSize: theme.typography.h4.fontSize,
      fontFamily: theme.typography.h2.fontFamily,
      fontWeight: "normal",
      [theme.breakpoints.up("sm")]: {
        width: "80%",
        alignSelf: "center",
      },
      [theme.breakpoints.up("md")]: {
        fontSize: theme.typography.h2.fontSize,
        "&.error-text": {
          lineHeight: "4.5rem",
          fontSize: theme.typography.h2.fontSize,
          width: "100%",
          alignSelf: "flex-start"
        }
      },
      [theme.breakpoints.up("lg")]: {
        width: "60%"
      },
      "&.address-heading": {
        width: "100%",
        alignSelf: "start",
        margin: 0
      }
    },
    "& p": {
      alignSelf: "center",
      [theme.breakpoints.up("sm")]: {
        width: "80%"
      },
      [theme.breakpoints.up("lg")]: {
        width: "60%"
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
      marginTop: theme.spacing(5),
      "& img": {
        width: "100%"
      },
      [theme.breakpoints.up("md")]: {
        marginTop: theme.spacing(5),
      },
    },
    "&.fullscreen .wp-block-columns": {
      marginTop: 0,
      overflow: "hidden",
      backgroundColor: theme.palette.background.default,
      [theme.breakpoints.up("md")]: {
        marginTop: 0,
        marginBottom: 0,
      },
    },
    "& .wp-block-columns": {
      display: "grid",
      gridAutoFlow: "row",
      marginTop: theme.spacing(5),
      [theme.breakpoints.up("md")]: {
        marginBottom: theme.spacing(5),
        gridAutoFlow: "column",
      },
      "&.has-2-columns": {
        [theme.breakpoints.up("md")]: {
          gridTemplateColumns: "1fr 1fr",
          gridGap: theme.spacing(10)
        },
        "&.address-info": {
          gridTemplateColumns: "200px 200px",
          marginBottom: theme.spacing(5)
        }
      }
    },
    "&.fullscreen .wp-block-column": {
      margin: 0
    },
    "& .wp-block-column": {
      display: "flex",
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
      flexDirection: "column",
      flexWrap: "wrap",
      [theme.breakpoints.up("md")]: {
        alignItems: "flex-start",
        flexDirection: "row",
      }
    },
    "& .fp-row": {
      marginLeft: -15,
      marginRight: -15,
    },
    "&.fullscreen .widget_flex-posts-list": {
      flex: 1
    },
    "&.fullscreen .fp-row": {
      marginLeft: 0,
      marginRight: 0,
      flex: 1,
    },
    "& .fp-post": {
      marginBottom: 20,
    },
    "& .fp-col": {
      display: "flex",
      flexDirection: "column",
      minWidth: 200,
      maxWidth: "100%",
      flex: "1",
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      padding: theme.spacing(2),
      [theme.breakpoints.up("md")]: {
        flex: "1 1 30%",
        maxWidth: 470,
      },
      transition: "box-shadow 0.4s ease-out, transform 0.2s ease-out",
      "&:hover": {
        transform: "scale(1.01)",
        boxShadow: "0 0 20px rgba(0, 0, 0, 0.2)",
      }
    },
    "&.fullscreen .fp-col": {
      position: "relative",
      minWidth: "100%",
      maxWidth: "100%",
      flex: 1,
      margin: 0,
      padding: 0,
      height: 300,
      backgroundColor: theme.palette.background.default,
      [theme.breakpoints.up("lg")]: {
        height: 400,
      },
      [theme.breakpoints.up("xl")]: {
        height: 500,
      }
    },
    "&.fullscreen .fp-col:empty": {
      height: 0,
      visibility: "hidden",
      margintop: 0,
      marginBottom: 0,
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
      transition: "opacity 300ms ease",
    },
    "&.fullscreen .fp-thumbnail": {
      display: "flex",
      flex: 1
    },
    "&.fullscreen fp-media": {
      display: "flex",
      height: "100%"
    },
    "& .fp-list-1 .fp-thumbnail, .fp-list-3 .fp-extra .fp-thumbnail": {
      marginRight: "1em",
    },
    "& .fp-thumbnail:hover": {
      opacity: 0.9,
    },
    "& .fp-thumbnail img": {
      display: "block",
      width: "100%",
      objectFit: "cover",
      overflow: "hidden",
    },
    "&.fullscreen .fp-thumbnail img": {
      height: "100%",
    },
    "&.fullscreen .fp-media": {
      display: "flex",
      height: "100%",
      opacity: 0.8
    },
    "&.fullscreen .fp-body": {
      position: "absolute",
      padding: theme.spacing(8),
      bottom: 0,
      color: theme.palette.primary.light,
      "& .fp-title a": {
        color: theme.palette.primary.light
      }
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
      fontSize: theme.typography.h6.fontSize,
      margin: 0,
      [theme.breakpoints.up("md")]: {
        fontSize: theme.typography.h5.fontSize,
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: theme.typography.h4.fontSize,
      }
    },
    "& .fp-list-2 .fp-title, .fp-list-3 .fp-main .fp-title, .fp-list-4 .fp-title": {
      fontWeight: theme.typography.h4.fontWeight,
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
      marginTop: "1rem",
      fontFamily: theme.typography.subtitle2.fontFamily,
      fontSize: theme.typography.subtitle1.fontSize
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
    },
    "& .wp-block-embed": {
      margin: 0,
      display: "flex",
      justifyContent: "center",
      background: theme.palette.background.default
    },
    "&.fullscreen .wp-block-embed__wrapper": {
      marginTop: 0,
    }, 
    "& .wp-block-embed__wrapper": {
      width: "100%",
      marginTop: theme.spacing(5),
      "& iframe": {
        width: "100%",
        [theme.breakpoints.up("sm")]: {
          height: 762
        },
        [theme.breakpoints.up("md")]: {
          height: 762
        },
        [theme.breakpoints.up("lg")]: {
          height: 762
        },
        [theme.breakpoints.up("xl")]: {
          height: 762
        },
      }
    }
  }
});