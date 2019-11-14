import { createStyles } from "@material-ui/core";
import theme from "./theme";

export default createStyles({
  root: {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.primary.dark,
    marginTop: 130,
    display: "flex",
    flex: 1,
    flexDirection: "column"
  },
  htmlContainer: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10),
    "& h2": {
      margin: 0,
      fontSize: theme.typography.h1.fontSize,
      [theme.breakpoints.up("md")]: {
        fontSize: 55
      },
      fontFamily: theme.typography.h1.fontFamily,
    },
    "& strong": {
      whiteSpace: "nowrap"
    },
    "& ul": {
      listStyle: "none",
      padding: 0
    },
    "& hr": {
      marginBottom: theme.spacing(5)
    },
    "& .wp-block-columns": {
      display: "grid",
      gridAutoFlow: "row",
      [theme.breakpoints.up("md")]: {
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(10),
        gridAutoFlow: "column"
      },
      "&.has-2-columns": {
        [theme.breakpoints.up("md")]: {
          gridTemplateColumns: "1fr 1fr",
        },
      }
    },
    "& .wp-block-column": {
      marginRight: theme.spacing(10),
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
        fontSize: 22,
        margin: 0,
        marginBottom: theme.spacing(5),
        [theme.breakpoints.up("md")]: {
          whiteSpace: "nowrap"
        },
      }
    }
  }
});