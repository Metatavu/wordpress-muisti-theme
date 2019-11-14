import * as React from "react";
import BasicLayout from "../BasicLayout";
import { Container, WithStyles, withStyles } from "@material-ui/core";
import styles from "../../styles/page-content";
import ApiUtils from "../../../src/utils/ApiUtils";
import { Page } from "../../../src/generated/client/src";
import ReactHtmlParser from "react-html-parser";

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
  page?: Page
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
   * Component did mount life-cycle handler
   */
  public componentDidMount = async () => {
    this.setState({
      loading: true
    });

    const slugParts = this.props.slug.split("/");
    const slug = slugParts.pop() || slugParts.pop();
    if (!slug) {
      //TODO: handle error
      return;
    }

    const api = ApiUtils.getApi();
    const pages = await api.getWpV2Pages({ slug: [ slug ] });
    const page = pages[0];
    this.setState({
      page: page,
      loading: false
    });
  }

  /**
   * Component render method
   */
  public render() {
    const { classes } = this.props;
    const pageHtmlSource = this.state.page && this.state.page.content ? this.state.page.content.rendered || "" : "";
    return (
      <BasicLayout>
        <div className={ classes.root }>
          <Container>
            <div className={ classes.htmlContainer }>
              { ReactHtmlParser(pageHtmlSource) }
            </div>
          </Container>
        </div>
      </BasicLayout>
    );
  }
}

export default withStyles(styles)(PostPage);