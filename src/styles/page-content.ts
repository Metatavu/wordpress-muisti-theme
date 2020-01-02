import { createStyles } from "@material-ui/core";
import theme from "./theme";

export default createStyles({
  /**
   * Page styles
   */
  root: {
    "&.article": {
      [theme.breakpoints.up("sm")]: {
        width: "90vw",
      },
      [theme.breakpoints.up("md")]: {
        width: "80vw",
      },
      [theme.breakpoints.up("lg")]: {
        width: "60vw",
      },
      [theme.breakpoints.up("xl")]: {
        width: "50vw",
        maxWidth: "960px"
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
  content: {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.primary.dark,
    marginTop: 100,
    [theme.breakpoints.up("md")]: {
      marginTop: 130,
    },
    display: "flex",
    flexDirection: "column"
  },
  contentWithHero: {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.primary.dark,
    marginTop: 0,
    display: "flex",
    flexDirection: "column"
  },
  title: {
    fontFamily: theme.typography.h1.fontFamily,
    fontWeight: "normal",
    fontSize: "1.6rem",
    [theme.breakpoints.up("sm")]: {
      fontSize: "2rem",
      lineHeight: 1.67
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "4.75rem",
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
  button: {
    width: "100%",
    marginTop: theme.spacing(5),
    [theme.breakpoints.up("md")]: {
      width: 300,
    }
  },
  errorText: {},
  /**
   * HTML Content styles
   */
  date: {
    fontFamily: theme.typography.h1.fontFamily,
    "&:first-letter": {
      textTransform: "uppercase"
    }
  },
  htmlContainer: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("sm")]: {
      marginBottom: theme.spacing(5),
    },
    [theme.breakpoints.up("md")]: {
      paddingBottom: theme.spacing(5),
      marginBottom: theme.spacing(5),
    },
    [theme.breakpoints.up("lg")]: {
      paddingBottom: theme.spacing(10),
      marginBottom: theme.spacing(5),
    },
    [theme.breakpoints.up("xl")]: {
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(10),
    },
    "& .address-heading": {
      fontSize: 20,
      margin: 0,
      [theme.breakpoints.up("md")]: {
        fontSize: 28,
      }
    },
    "& a": {
      fontFamily: theme.typography.h1.fontFamily,
      fontWeight: "normal",
      color: theme.palette.primary.dark
    },
    /**
     * Article content styles
     */
    "&.article": {
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(5),
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
        [theme.breakpoints.up("lg")]: {
          fontSize: 18,
          lineHeight: 1.6
        },
        "&.has-medium-font-size": {
          fontSize: 20,
          marginBottom: 0,
          [theme.breakpoints.up("md")]: {
            marginBottom: theme.spacing(2)
          },
          [theme.breakpoints.up("lg")]: {
            fontSize: 22,
          }
        },
      },
      "& .wp-block-quote": {
        marginLeft: 0,
        marginRight: 0,
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        [theme.breakpoints.up("md")]: {
          marginTop: theme.spacing(5),
          marginBottom: theme.spacing(5),
        },
        "& p": {
          fontFamily: theme.typography.h1.fontFamily,
          fontSize: "1.6rem",
          color: theme.palette.secondary.main,
          margin: 0,
          [theme.breakpoints.up("md")]: {
            fontSize: "2rem",
          }
        }
      },
      "& .wp-block-media-text": {
        marginTop: theme.spacing(5),
        [theme.breakpoints.up("sm")]: {
          display: "flex",
          flexDirection: "row",
          marginBottom: theme.spacing(5)
        },
        [theme.breakpoints.up("md")]: {
          marginBottom: theme.spacing(5)
        },
        "&.has-media-on-the-right": {
          flexDirection: "row-reverse",
          "& .wp-block-media-text__content": {
            marginLeft: 0,
            [theme.breakpoints.up("sm")]: {
              marginRight: theme.spacing(5)
            }
          }
        },
        "&.is-vertically-aligned-top": {
          alignItems: "flex-start",
        },
        "&.is-image-fill .wp-block-media-text__media": {
          height: "280px",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          margin: 0,
          marginBottom: theme.spacing(5),
          [theme.breakpoints.up(360)]: {
            height: "320px",
          },
          [theme.breakpoints.up("sm")]: {
            display: "flex",
            flex: 1,
            alignSelf: "stretch",
            height: "auto",
            marginBottom: 0
          },
          "& img": {
            display: "none"
          }
        }
      },
      "& .wp-block-media-text__media": {
        width: "initial",
        height: "initial",
      },
      "& .wp-block-media-text__content": {
        flex: 2,
        [theme.breakpoints.up("sm")]: {
          marginLeft: theme.spacing(5),
        },
        "& p": {
          "&:first-child": {
            marginTop: 0
          },
          "&:last-child": {
            marginBottom: 0
          }
        }
      }
    },
    /**
     * Fullscreen page styles
     */
    "&.fullscreen": {
      marginTop: 0,
      marginBottom: 0,
      paddingBottom: 0,
      "& .wp-block-columns": {
        marginTop: 0,
        overflow: "hidden",
        backgroundColor: theme.palette.background.default,
        [theme.breakpoints.up("md")]: {
          marginTop: 0,
          marginBottom: 0,
        },
        "&.highlight-columns": {
          "& .wp-block-column": {
            [theme.breakpoints.up("md")]: {
              cursor: "pointer",
              flex: 1
            }
          }
        }
      },
      "& .wp-block-column": {
        margin: 0
      },
      "& .widget_flex-posts-list": {
        [theme.breakpoints.up("md")]: {
          flex: 1
        }
      },
      "& .fp-row": {
        marginLeft: 0,
        marginRight: 0,
        [theme.breakpoints.up("md")]: {
          flex: 1
        }
      },
      "& .fp-col": {
        position: "relative",
        minWidth: "100%",
        maxWidth: "100%",
        margin: 0,
        padding: 0,
        height: 300,
        backgroundColor: theme.palette.background.default,
        [theme.breakpoints.up("md")]: {
          flex: 1
        },
        [theme.breakpoints.up("lg")]: {
          height: 400,
        },
        [theme.breakpoints.up("xl")]: {
          height: 500,
        }
      },
      "& .fp-col:empty": {
        height: 0,
        visibility: "hidden",
        margintop: 0,
        marginBottom: 0,
      },
      "& .fp-thumbnail": {
        [theme.breakpoints.up("md")]: {
          display: "flex",
          flex: 1
        }
      },
      "& .fp-media": {
        display: "flex",
        height: "100%",
        opacity: 0.8
      },
      "& .fp-body": {
        position: "absolute",
        padding: theme.spacing(8),
        bottom: 0,
        color: theme.palette.primary.light,
        "& .fp-title a": {
          color: theme.palette.primary.light
        }
      },
      "& .fp-thumbnail img": {
        height: "100%",
      },
      "& .wp-block-embed__wrapper": {
        marginTop: 0,
      }
    },
    "& h2": {
      margin: 0,
      marginTop: theme.spacing(2),
      fontSize: 28,
      fontFamily: theme.typography.h2.fontFamily,
      lineHeight: 1.2,
      fontWeight: "normal",
      [theme.breakpoints.up(360)]: {
        marginBottom: theme.spacing(2),
      },
      [theme.breakpoints.up("sm")]: {
        fontSize: theme.typography.h4.fontSize,
        width: "80%",
        alignSelf: "center",
      },
      [theme.breakpoints.up("md")]: {
        fontSize: theme.typography.h2.fontSize,
        lineHeight: 1.2,
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        "&.error-text": {
          lineHeight: "4.5rem",
          fontSize: theme.typography.h2.fontSize,
          width: "100%",
          alignSelf: "flex-start"
        }
      },
      [theme.breakpoints.up("lg")]: {
        lineHeight: 1.43,
        width: "60%",
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(5),
      },
      "&.address-heading": {
        width: "100%",
        alignSelf: "start",
        margin: 0
      }
    },
    "& p": {
      alignSelf: "center",
      fontSize: 12,
      "&.has-medium-font-size": {
        fontSize: 20
      },
      [theme.breakpoints.up(413)]: {
        fontSize: "0.875rem",
      },
      [theme.breakpoints.up("sm")]: {
        width: "80%",
        fontSize: 16,
      },
      [theme.breakpoints.up("lg")]: {
        width: "60%",
        fontSize: "1rem"
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
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(5),
      width: "100%",
    },
    "& .wp-block-image": {
      margin: 0,
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
      "& img": {
        width: "100%"
      },
      [theme.breakpoints.up("md")]: {
        marginTop: theme.spacing(5)
      },
    },
    "& .wp-block-columns": {
      marginTop: theme.spacing(5),
      [theme.breakpoints.up("md")]: {
        display: "flex",
        flexDirection: "row",
        marginBottom: theme.spacing(5),
      },
      "&.has-2-columns": {
        "&.contact-column": {
          marginTop: 0,
        },
        "&.address-info": {
          flexDirection: "row",
          [theme.breakpoints.up("md")]: {
            width: "50%",
          },
          "& .wp-block-column": {
            [theme.breakpoints.up("md")]: {
              flex: 1
            }
          }
        }
      }
    },
    "& .wp-block-column": {
      display: "flex",
      [theme.breakpoints.up("md")]: {
        marginBottom: 0
      }
    },
    "& .address-info":{
      "& .wp-block-column": {
        flexDirection: "column",
        "& p": {
          alignSelf: "start",
          margin: 0,
          [theme.breakpoints.up("lg")]: {
            fontSize: "1rem"
          }
        }
      }
    },
    /**
     * Contact card styles
     */
    "& .contact-card": {
      marginBottom: theme.spacing(5),
      display: "flex",
      flexDirection: "row",
      [theme.breakpoints.up("sm")]: {
        marginBottom: theme.spacing(8),
        marginRight: theme.spacing(3)
      },
      [theme.breakpoints.up("md")]: {
        marginRight: theme.spacing(5)
      },
      [theme.breakpoints.up("lg")]: {
        marginRight: theme.spacing(8)
      },
      "& p": {
        fontSize: 12,
        width: "initial",
        alignSelf: "start",
        margin: 0,
        [theme.breakpoints.up(360)]: {
          fontSize: "0.875rem"
        },
        [theme.breakpoints.up("md")]: {
          fontSize: "1rem"
        }
      },
      "& .wp-block-media-text__media": {
        backgroundColor: "#fff",
        margin: 0,
        width: 50,
        maxWidth: 50,
        height: 50,
        maxHeight: 50,
        [theme.breakpoints.up(360)]: {
          width: 75,
          maxWidth: 75,
          height: 75,
          maxHeight: 75,
        },
        [theme.breakpoints.up(413)]: {
          width: 100,
          maxWidth: 100,
          height: 100,
          maxHeight: 100,
        },
        [theme.breakpoints.up("sm")]: {
          width: 150,
          maxWidth: 150,
          height: 150,
          maxHeight: 150,
        },
        [theme.breakpoints.up("md")]: {
          width: 175,
          maxWidth: 175,
          height: 175,
          maxHeight: 175,
        },
        "& img": {
          width: "100%"
        }
      },
      "& .wp-block-media-text__content": {
        marginLeft: theme.spacing(2),
        [theme.breakpoints.up(413)]: {
          marginLeft: theme.spacing(3),
        },
        [theme.breakpoints.up("sm")]: {
          marginLeft: theme.spacing(5),
        },
        [theme.breakpoints.up("md")]: {
          display: "flex",
          flex: 1,
          flexDirection: "column",
          marginLeft: theme.spacing(4),
        },
        "& h3": {
          fontSize: "1.2rem",
          marginTop: 0,
          marginBottom: 0,
          [theme.breakpoints.up("md")]: {
            fontSize: 28,
          },
          [theme.breakpoints.up("lg")]: {
            fontSize: "2rem",
            marginBottom: "1rem"
          },
        },
        "& strong": {
          fontSize: 12,
          [theme.breakpoints.up(360)]: {
            fontSize: "0.875rem"
          },
          [theme.breakpoints.up("md")]: {
            fontSize: "1rem"
          },
        },
        "& ul": {
          marginBottom: 0,
          marginTop: theme.spacing(1),
          fontSize: 12,
          [theme.breakpoints.up(360)]: {
            fontSize: "0.875rem",
            marginBottom: theme.spacing(1)
          },
          [theme.breakpoints.up("md")]: {
            fontSize: "1rem"
          },
        }
      }
    },
    "& .wp-block-media-text": {
      [theme.breakpoints.up("md")]: {
        display: "flex"
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
    "& .fp-post": {
      marginBottom: 20,
    },
    "& .fp-col": {
      minWidth: 200,
      maxWidth: "100%",
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      [theme.breakpoints.up("md")]: {
        padding: theme.spacing(2),
        display: "flex",
        flexDirection: "column",
        flex: "1 1 30%",
        maxWidth: 470,
      },
      transition: "box-shadow 0.4s ease-out, transform 0.2s ease-out",
      "&:hover": {
        transform: "scale(1.01)",
        boxShadow: "0 0 20px rgba(0, 0, 0, 0.2)",
      }
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