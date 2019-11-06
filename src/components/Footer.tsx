import * as React from "react";
import styles from "../styles/footer";
import { WithStyles, withStyles, Container } from "@material-ui/core";

/**
 * Interface representing component properties
 */
interface Props extends WithStyles<typeof styles> {
  logo?: string;
}

/**
 * Interface representing component state
 */
interface State {
  loading: boolean
}

/**
 * Footer component
 */
class Footer extends React.Component<Props, State> {

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
      <div className={ classes.root } >
        <div className={ classes.contentContainer }>
          <Container maxWidth="xl">
            {
              this.renderContactInfo()
            }
          </Container>
        </div>
      </div>
    );
  }

  private renderContactInfo = () => {
    const { classes } = this.props;
    return (
      <Container>
        <img src={ this.props.logo }></img>
      </Container>
    );
  }
}

export default withStyles(styles)(Footer);