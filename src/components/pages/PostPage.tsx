import * as React from "react";
import BasicLayout from "../BasicLayout";
import { Container, WithStyles, withStyles } from "@material-ui/core";
import styles from "../../styles/page-content";
import ApiUtils from "../../../src/utils/ApiUtils";
import { Page, Post } from "../../../src/generated/client/src";
import ReactHtmlParser from "react-html-parser";
import HeroBanner from "../HeroBanner";

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
  post?: Post
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
    const pages = await api.getWpV2Pages({ slug: [slug] });
    const posts = await api.getWpV2Posts({ slug: [slug] });
    const page = pages[0];
    const post = posts[0];

    this.setState({
      page: page,
      post: post,
      loading: false
    });
  }

  private setHtmlSource = () => {
    const noContentError = "<h2>Hups!</h2><p>Sivua ei löytynyt. Tarkista syöttämäsi osoite.</p>";
    const undefinedContentError = "<h2>Hups!</h2><p>Jokin meni vikaan. Ota yhteyttä ylläpitoon.</p>";

    if (this.state.page && this.state.page.content) {
      return this.state.page.content.rendered || undefinedContentError;
    } else if (this.state.post && this.state.post.content) {
      return this.state.post.content.rendered || undefinedContentError;
    } else {
      return noContentError;
    }
  }

  /**
   * Component render method
   */
  public render() {
    const { classes } = this.props;
    const pageHtmlSource = this.state.loading ? "" : this.setHtmlSource();

    return (
      <BasicLayout>
        <div className={ classes.hero }></div>
        <div className={ classes.content }>
          <Container>
            <div className={ classes.htmlContainer }>
              { !this.state.loading &&
                ReactHtmlParser(pageHtmlSource)
              }
            </div>
          </Container>
        </div>
      </BasicLayout>
    );
  }
}

export default withStyles(styles)(PostPage);