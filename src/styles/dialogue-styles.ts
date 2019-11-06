import { createStyles } from "@material-ui/core";

export default createStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    position: "fixed",
    top: 130,
    width: "100vw",
    zIndex: 1000,
    height: "calc(100% - 130px)",
    backgroundColor: "rgba(45, 45, 45, 0.9)"
  },
  tinyHeader: {
    top: 60,
    height: "calc(100% - 60px)"
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
  controlContainer: {
    marginTop: 60,
    display: "flex",
    flexDirection: "row-reverse"
  },
  searchContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  close: {
    fontSize: 12,
    textTransform: "initial"
  },
  closeIcon: {
    fontSize: 40
  }
});