import * as React from "react";
import BasicLayout from "../BasicLayout";
import { Container, WithStyles, withStyles, Button } from "@material-ui/core";
import styles from "../../styles/page-content";
import ApiUtils from "../../../src/utils/ApiUtils";
import { Page, Post } from "../../../src/generated/client/src";
import ReactHtmlParser, { convertNodeToElement } from "react-html-parser";
import { DomElement } from "domhandler";
import strings from "../../localization/strings";
import { Link } from "react-router-dom";
import ArrowIcon from "@material-ui/icons/ArrowForwardRounded";
import * as classNames from "classnames";

/**
 * Interface representing component properties
 */
interface Props extends WithStyles<typeof styles> {
  slug: string
  lang: string
}

type PageTemplate = "basic" | "fullscreen";

/**
 * Interface representing component state
 */
interface State {
  page?: Page
  template: PageTemplate
  post?: Post
  loading: boolean
  heroBanner?: React.ReactElement
  heroContent?: React.ReactElement
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
      template: "basic",
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

    const lang = this.props.lang;
    const slugParts = this.props.slug.split("/");
    const slug = slugParts.pop() || slugParts.pop();
    if (!slug) {
      // TODO: handle error
      return;
    }

    const api = ApiUtils.getApi();

    const apiCalls = await Promise.all([
      api.getWpV2Pages({ lang: [ lang ], slug: [slug] }),
      api.getWpV2Posts({ lang: [ lang ], slug: [slug] })
    ]);

    const page = apiCalls[0][0];
    const post = apiCalls[1][0];

    this.setState({
      page: page,
      post: post,
      loading: false
    });
  }

  public componentWillMount = async () => {
    this.setState({
      template: this.getTemplate()
    });
  }

  /**
   * Component render method
   */
  public render() {
    const { classes, lang } = this.props;
    const pageTitle = this.state.loading ? "" : this.setTitleSource();

    return (
      <BasicLayout lang={lang}>
        { this.state.heroBanner &&
          <div className={ classes.hero }>
            <div className={ classes.heroContentContainer }>
              <h1 className={ classes.heroTitle }>{ pageTitle }</h1>
              { this.state.heroContent }
            </div>
            { this.state.heroBanner }
          </div>
        }
        <div className={ this.state.heroBanner ? classes.contentWithHero : classes.content }>
          { this.renderContent(pageTitle) }
        </div>
      </BasicLayout>
    );
  }

  private renderContent = (pageTitle: string) => {
    if (this.state.template === "fullscreen") {
      return this.renderPostContent(pageTitle);
    }

    return (
      <Container>
        { this.renderPostContent(pageTitle) }
      </Container>
    );

  }

  private renderPostContent = (pageTitle: string) => {
    const { classes } = this.props;
    return (
      <div className={ classNames(classes.htmlContainer, this.state.template === "fullscreen" ? "fullscreen" : "") }>
      { !this.state.heroBanner &&
        <h1 className={ classes.title }>{ pageTitle }</h1>
      }
      { !this.state.loading &&
        this.getPageOrPostContent()
      }
    </div>
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
   * Get html link href
   */
  private getLinkHref = (node: DomElement) => {
    return node.attribs && node.attribs.href ? node.attribs.href : "";
  }

  /**
   * Get html text content
   */
  private getElementTextContent = (node: DomElement) => {
    return node.children && node.children[0] ? node.children[0].data as string : "";
  }

  /**
   * Set html source for page content
   */
  private getPageOrPostContent = () => {
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
    const { classes } = this.props;
    const classNames = this.getElementClasses(node);

    // Find hero banner and set it to state
    if (classNames.indexOf("hero") > -1) {
      if (!this.state.heroBanner) {
        this.setState({
          heroBanner: convertNodeToElement(node, index, this.transformContent)
        });
      }
      return null;
    }

    // Find hero content and set it to state
    if (classNames.indexOf("hero-content") > -1) {
      if (!this.state.heroContent) {
        this.setState({
          heroContent: convertNodeToElement(node, index, this.transformContent)
        });
      }
      return null;
    }

    // Find any buttons and replace them with Material UI button
    if (classNames.indexOf("wp-block-button") > -1) {
      const childNode = node.children && node.children.length ? node.children[0] : null;
      if (childNode) {
        const urlParts = this.getLinkHref(childNode).split("/");
        const slug = urlParts.pop() || urlParts.pop();
        return (
          <Link style={{ textDecoration: "none" }} to={slug || "/"}>
            <Button className={ classes.button } color="primary" variant="outlined" endIcon={ <ArrowIcon /> }>
              {this.getElementTextContent(childNode)}
            </Button>
          </Link>
        );
      }
    }

    return convertNodeToElement(node, index, this.transformContent);
  }

  /**
   * Returns current page template from body class
   *
   * @returns page template
   */
  private getTemplate = (): PageTemplate => {
    const templateClass = (document.body.className || "").split(" ").find((className) => className.indexOf("template-") === 0);
    return templateClass ? templateClass.substring(9) as PageTemplate : "basic";
  }
}

export default withStyles(styles)(PostPage);