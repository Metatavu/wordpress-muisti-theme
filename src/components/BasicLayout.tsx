import * as React from "react";
import { AppBar, WithStyles, createStyles, Theme, withStyles, Button, IconButton, Link, Hidden } from "@material-ui/core";
import Api, { MenuLocationData, MenuDataItems } from "muisti-wordpress-client";
import logo from "../resources/svg/logo.svg";
import ArrowIcon from "@material-ui/icons/ArrowForwardRounded";
import SearchIcon from "@material-ui/icons/SearchRounded";

/**
 * Interface representing component properties
 */
interface Props extends WithStyles<typeof styles> {

}

/**
 * Interface representing component state
 */
interface State {
  loading: boolean
  mainMenu?: MenuLocationData
}

const headerHeight = "130";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      height: "100vh",
      backgroundColor: "#2d2d2d"
    },
    appBar: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      height: headerHeight,
      backgroundColor: "transparent",
      padding: "0 80px",
      borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
    },
    headerSection: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
    logo: {
      height: 80
    },
    nav: {
      display: "flex",
      flexDirection: "row",
      alignContent: "center"
    },
    navLink: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: 125,
      height: 80,
      textDecoration: "none",
      color: "#fff"
    },
    donate: {
      display: "flex",
      justifyContent: "space-between",
      width: 200,
      borderRadius: 0,
      boxShadow: "0 0 0 transparent",
      color: "#fff",
      textTransform: "initial",
      backgroundColor: "#C24A49",
      "&:hover": {
        backgroundColor: "#b53e3d"
      },
      "&:active": {
        backgroundColor: "#b53e3d",
      },
      "&:focus": {
        boxShadow: "0 0 0 0.2rem rgba(255, 255 ,255 , 0.5)",
      }
    }
  });

/**
 * React component for basic application layout
 */
class BasicLayout extends React.Component<Props, State> {

  /**
   * Constructor
   * @param props component properties
   */
  constructor(props: Props) {
    super(props);
    this.state = {
      loading: false
    };
  }

  public componentDidMount = async () => {
    this.setState({
      loading: true
    });

    const service = Api.getDefaultService("TOKEN");

    const mainMenu = await service.getMenusV1LocationsById("main");

    this.setState({
      loading: false,
      mainMenu: mainMenu
    });
  }

  /**
   * Render basic layout
   */
  public render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar elevation={0} className={classes.appBar}>
          <div className={classes.headerSection}>
            <img className={classes.logo} src={logo}></img>
            <Hidden smDown implementation="css">
              { this.renderMenu() }
            </Hidden>
          </div>
          <Hidden smDown implementation="css">
            <div className={classes.headerSection}>
              { this.renderDonateButton() }
              { this.renderSearch() }
            </div>
          </Hidden>
        </AppBar>
        <div className="content">
          { this.props.children }
        </div>
      </div>
    );
  }

  /**
   * Render menu method
   */
  private renderMenu = () => {
    const mainMenu = this.state.mainMenu;
    const { classes } = this.props;

    if (!mainMenu || !mainMenu.items) {
      return null;
    }

    return (
      <div className={classes.nav}>
        { mainMenu.items.map(this.renderMenuItem) }
      </div>
    );
  }

  /**
   * Render menu item method
   */
  private renderMenuItem = (item: MenuDataItems) => {
    const { classes } = this.props;
    return (
      <Link key={ item.db_id } href={ item.url } className={ classes.navLink }>{ item.title }</Link>
    );
  }

  private renderDonateButton = () => {
    const { classes } = this.props;
    return (
      <Button
        variant="contained"
        className={ classes.donate }
        endIcon={ <ArrowIcon /> }
      >
        Lahjoita
      </Button>
    );
  }

  private renderSearch = () => {
    return (
      <IconButton>
        <SearchIcon color="primary" />
      </IconButton>
    );
  }
}

export default withStyles(styles)(BasicLayout);