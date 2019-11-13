import * as React from "react";
import BasicLayout from "../BasicLayout";
import { Container, WithStyles, withStyles } from "@material-ui/core";
import styles from "../../styles/page-content";

/**
 * Interface representing component properties
 */
interface Props extends WithStyles<typeof styles> {
  slug: string
}

/**
 * Interface representing component state
 */
interface State {
  loading: boolean
}

/**
 * PostPage component
 */
class PostPage extends React.Component<Props, State> {

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
   * Component render method
   */
  public render() {
    const { classes } = this.props;
    return (
      <BasicLayout>
        <div className={ classes.root }>
          <Container>
            <p>location: { this.props.slug }</p>
          </Container>
        </div>
      </BasicLayout>
    );
  }
}

export default withStyles(styles)(PostPage);