import * as React from "react";
import BasicLayout from "../BasicLayout";
import { Container, WithStyles, withStyles } from "@material-ui/core";
import styles from "../../styles/page-content";
import ApiUtils from "../../../src/utils/ApiUtils";
import { Page, Post } from "../../../src/generated/client/src";
import ReactHtmlParser, { convertNodeToElement } from "react-html-parser";
import { DomElement } from "domhandler";
import strings from "../../localization/strings";

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
  heroBanner?: React.ReactElement
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

    const apiCalls = await Promise.all([
      api.getWpV2Pages({ slug: [slug] }),
      api.getWpV2Posts({ slug: [slug] })
    ]);

    const page = apiCalls[0][0];
    const post = apiCalls[1][0];

    this.setState({
      page: page,
      post: post,
      loading: false
    });
  }

  /**
   * Component render method
   */
  public render() {
    const { classes } = this.props;
    const pageTitle = this.state.loading ? "" : this.setTitleSource();

    return (
      <BasicLayout>
        { this.state.heroBanner &&
          <div className={ classes.hero }>
            <h1 className={ classes.heroTitle }>{ pageTitle }</h1>
            { this.state.heroBanner }
          </div>
        }
        <div className={ this.state.heroBanner ? classes.contentWithHero : classes.content }>
          <Container>
            <div className={ classes.htmlContainer }>
              { !this.state.heroBanner &&
                <h1 className={ classes.title }>{ pageTitle }</h1>
              }
              { !this.state.loading &&
                this.getPageOrPostContent()
              }
            </div>
          </Container>
        </div>
      </BasicLayout>
    );
  }

  /**
   * get html element classes
   *
   * @param node DomElement
   */
  private getElementClasses = (node: DomElement): string[] => {
    const classString = node.attribs ? node.attribs.class : "";
    if (node.attribs && node.attribs.class) {
      return classString.split(" ");
    }

    return [];
  }

  /**
   * Set html source for page content
   */
  private getPageOrPostContent = () => {
    const { classes } = this.props;
    const {page, post} = this.state;

    const noContentError = <h2 className="error-text">{ strings.pageNotFound }</h2>;
    const undefinedContentError = <h2 className="error-text">{ strings.somethingWentWrong }</h2>;
    if (!page && !post) {
      return noContentError;
    }

    const renderedContent = page && page.content ? page.content.rendered : post && post.content ? post.content.rendered : undefined;
    if (!renderedContent) {
      return undefinedContentError;
    }

    return ReactHtmlParser(renderedContent, { transform: this.transformContent });
  }

  /**
   * Set html source for page content
   */
  private setTitleSource = () => {
    const noContentError = `${ strings.whoops }`;
    const undefinedContentError = `${ strings.error }`;

    if (this.state.page && this.state.page.title) {
      return this.state.page.title.rendered || undefinedContentError;
    } else if (this.state.post && this.state.post.title) {
      return this.state.post.title.rendered || undefinedContentError;
    } else {
      return noContentError;
    }
  }

  /**
   * transform html source content before it is rendered
   *
   * @param node DomElement
   * @param index DomElement index
   */
  private transformContent = (node: DomElement, index: number) => {
    const classNames = this.getElementClasses(node);
    if (classNames.indexOf("hero") > -1) {
      if (!this.state.heroBanner) {
        this.setState({
          heroBanner: convertNodeToElement(node, index, this.transformContent)
        });
      }
      return null;
    }

    return convertNodeToElement(node, index, this.transformContent);
  }
}

export default withStyles(styles)(PostPage);