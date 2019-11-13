import * as React from "react";
import classNames from "classnames";
import { AppBar, WithStyles, withStyles, Button, IconButton, Link, Hidden } from "@material-ui/core";
import logo from "../resources/svg/logo.svg";
import ArrowIcon from "@material-ui/icons/ArrowForwardRounded";
import SearchIcon from "@material-ui/icons/SearchRounded";
import HamburgerIcon from "@material-ui/icons/MenuSharp";
import { MenuLocationData, MenuItemData } from "../generated/client/src";
import ApiUtils from "../utils/ApiUtils";
import SiteMenu from "./SiteMenu";
import SiteSearch from "./SiteSearch";
import styles from "../styles/basic-layout";
import Footer from "./Footer";

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
  scrollPosition: number
  siteMenuVisible: boolean
  siteSearchVisible: boolean
}

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
      loading: false,
      scrollPosition: 0,
      siteMenuVisible: false,
      siteSearchVisible: false
    };
  }

  public componentDidMount = async () => {
    window.addEventListener("scroll", this.handleScroll);
    this.setState({
      loading: true,
    });

    const api = ApiUtils.getApi();

    const mainMenu = await api.getMenusV1LocationsById({ id: "main" });

    this.setState({
      loading: false,
      mainMenu: mainMenu,
    });
  }

  public componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  /**
   * Render basic layout
   */
  public render() {
    const { classes } = this.props;
    let appBarClasses = classNames( classes.appBar );
    let logoClasses = classNames( classes.logo );
    if (this.state.scrollPosition > 170) {
      appBarClasses = classNames( classes.appBar, classes.smallAppBar );
      logoClasses = classNames( classes.logo, classes.smallLogo );
    }

    return (
      <div
        className={ classes.root }
        // disable scrolling when search and menu dialogs are open
        style={this.state.siteMenuVisible || this.state.siteSearchVisible ? {overflow: "hidden"} : {overflow: "visible"}}
      >
        <AppBar elevation={0} className={ appBarClasses }>
          <div className={ classes.headerSection }>
            <Link href="/">
              <img className={ logoClasses } src={ logo } />
            </Link>
            <Hidden smDown implementation="css">
              <div className={ classes.topNavDesktop }>
                { this.renderMenu() }
              </div>
            </Hidden>
            <IconButton
              className={ classes.menuButton }
              color="primary"
              onClick={ this.showSiteMenu }
            >
              <HamburgerIcon fontSize="large" />
            </IconButton>
          </div>
          <Hidden smDown implementation="css">
            <div className={ classes.headerSection }>
              { this.renderDonateButton() }
              { this.renderSearch() }
            </div>
          </Hidden>
        </AppBar>
        <div className="content">
          { this.props.children }
        </div>
        <SiteMenu
          tinyHeader={ this.state.scrollPosition > 170 }
          onClose={ () => this.setState({ siteMenuVisible: false }) }
          visible={ this.state.siteMenuVisible }
        />
        <SiteSearch
          tinyHeader={ this.state.scrollPosition > 170 }
          onClose={ () => this.setState({ siteSearchVisible: false }) }
          visible={ this.state.siteSearchVisible }
        />
        <Footer logo={ logo }  />
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
        {
          mainMenu.items.map(this.renderMenuItem)
        }
        <Link variant="subtitle1" className={ classes.navLink } onClick={ this.showSiteMenu }>Lisää +</Link>
      </div>
    );
  }

  /**
   * Render menu item method
   */
  private renderMenuItem = (item: MenuItemData) => {
    const { classes } = this.props;
    return (
      <Link
        variant="subtitle1"
        key={ item.db_id }
        href={ item.url }
        className={ classes.navLink }
        >
          {
            item.title
          }
      </Link>
    );
  }

  /**
   * Render donate button method
   */
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

  /**
   * Render search button method
   */
  private renderSearch = () => {
    return (
      <IconButton onClick={ this.showSiteSearch }>
        <SearchIcon color="primary" />
      </IconButton>
    );
  }

  /**
   * Update scrolling position method
   */
  private handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    this.setState({
      scrollPosition: currentScrollPos
    });
  }

  /**
   * Site menu visibility method
   */
  private showSiteMenu = () => {
    return (
      this.setState({
        siteMenuVisible: true
      })
    );
  }

  /**
   * Site search visibility method
   */
  private showSiteSearch = () => {
    return (
      this.setState({
        siteSearchVisible: true
      })
    );
  }
}

export default withStyles(styles)(BasicLayout);