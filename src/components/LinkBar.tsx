import * as React from "react";
import { WithStyles, withStyles, Hidden, Typography } from "@material-ui/core";
import styles from "../styles/link-bar";
import SwipeableViews from "react-swipeable-views";
import ArrowIcon from "@material-ui/icons/ArrowForwardSharp";

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

    this.setState({
      loading: false
    });
  }

  /**
   * Component render method
   */
  public render() {
    const { classes } = this.props;
    return (
      <div>
        <Hidden mdUp implementation="css">
          <SwipeableViews>
            { this.renderSlide() }
            { this.renderSlide() }
            { this.renderSlide() }
          </SwipeableViews>
        </Hidden>
        <Hidden smDown implementation="css">
          <div className={ classes.linkContainer }>
            { this.renderSlide() }
            { this.renderSlide() }
            { this.renderSlide() }
          </div>
        </Hidden>
      </div>
    );
  }

  private renderSlide = () => {
    const { classes } = this.props;
    return (
      <div className={ classes.slide }>
        <div className={ classes.slideContent }>
          <div className={ classes.slideText }>
            <Typography variant="subtitle2">Mikä muisti on?</Typography>
          </div>
          <ArrowIcon fontSize="large" />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(LinkBar);