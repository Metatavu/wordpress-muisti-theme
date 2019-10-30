import * as React from "react";
import Api, { MenuLocationData, MenuItemData } from "muisti-wordpress-client";
import { Link, WithStyles, createStyles, withStyles, Theme } from "@material-ui/core";

/**
 * Interface representing component properties
 */
interface Props extends WithStyles<typeof styles> {
}

/**
 * Interface representing component state
 */
interface State {
  menu?: MenuLocationData
  loading: boolean
}

const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flex: 1,
      position: "fixed",
      height: "100vh",
      backgroundColor: "#2d2d2d"
    },
    menuGroup: {
      display: "flex",
      flexDirection: "column"
    },
    link: {
      fontSize: theme.typography.h2.fontSize
    },
    subLink: {
      fontSize: theme.typography.subtitle1.fontSize
    }
  });

/**
 * SiteMenu component
 */
class SiteMenu extends React.Component<Props, State> {

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

    const service = Api.getDefaultService("TOKEN");

    const menu = await service.getMenusV1LocationsById({ id: "site" });

    this.setState({
      menu: menu,
      loading: false
    });
  }

  /**
   * Component render method
   */
  public render() {
    const { classes } = this.props;
    if (!this.state.menu || !this.state.menu.items) {
      return null;
    }

    return (
      <div className={ classes.root }>
        {
          this.state.menu.items.map((item) => {
            return this.renderMenuItem(item);
          })
        }
        <pre style={{ backgroundColor: "#fff" }}>{ this.state.menu ? JSON.stringify( this.state.menu, null, 2 ) : "" };</pre>
      </div>
    );
  }

  private renderMenuItem = (item: MenuItemData) => {
    const { classes } = this.props;
    return (
      <div>
        <Link
          className={ classes.link }
          key={ item.db_id }
          href={ item.url }
        >
          {
            item.title
          }
        </Link>
        { this.renderMenuSubItems(item) }
      </div>
    );
  }

  private renderMenuSubItems = (item: MenuItemData) => {
    const { classes } = this.props;
    return (
      <Link
        className={ classes.subLink }
        key={ item.db_id }
        href={ item.url }
      >
        {
          item.title
        }
      </Link>
    );
  }
}

export default withStyles(styles)(SiteMenu);