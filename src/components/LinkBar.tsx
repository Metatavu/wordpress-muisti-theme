import * as React from "react";
import { WithStyles, withStyles, Hidden, Typography, Link } from "@material-ui/core";
import styles from "../styles/link-bar";
import SwipeableViews from "react-swipeable-views";
import ArrowIcon from "@material-ui/icons/ArrowForwardSharp";
import { MenuLocationData, MenuItemData } from "../generated/client/src";
import ApiUtils from "../utils/ApiUtils";

/**
 * Interface representing component properties
 */
interface Props extends WithStyles<typeof styles> {
  lang: string
}

/**
 * Interface representing component state
 */
interface State {
  menu?: MenuLocationData
  loading: boolean
}

/**
 * LinkBar component
 */
class LinkBar extends React.Component<Props, State> {

  /**
   * Constructor
   *
   * @param props component properties
   */
  constructor(props: Props) {
    super(props);
    this.state = {
      loading: false
    };
  }

  /**
   * Component did mount life-cycle handler
   */
  public componentDidMount = async () => {
    this.setState({
      loading: true
    });

    const api = ApiUtils.getApi();

    const menu = await api.getMenusV1LocationsById({ lang: this.props.lang, id: "quick" });

    this.setState({
      menu: menu,
      loading: false
    });
  }

  /**
   * Component render method
   */
  public render() {
    const menu = this.state.menu;
    const { classes } = this.props;

    if (!menu || !menu.items) {
      return null;
    }

    return (
      <div>
        <Hidden mdUp implementation="css">
          <SwipeableViews>
            {
              menu.items.map(this.renderLinkItem)
            }
          </SwipeableViews>
        </Hidden>
        <Hidden smDown implementation="css">
          <div className={ classes.linkContainer }>
            {
              menu.items.map(this.renderLinkItem)
            }
          </div>
        </Hidden>
      </div>
    );
  }

  /**
   * Render link item method
   */
  private renderLinkItem = (item: MenuItemData) => {
    const { classes } = this.props;
    return (
      <div key={ item.db_id } className={ classes.slide }>
        <Link className={ classes.link } href={ item.url }>
          <div className={ classes.slideContent }>
            <div className={ classes.slideText }>
              <Typography variant="h5">{ item.title }</Typography>
            </div>
            <ArrowIcon fontSize="large" />
          </div>
        </Link>
      </div>
    );
  }
}

export default withStyles(styles)(LinkBar);