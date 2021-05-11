import * as React from "react";
import BasicLayout from "../BasicLayout";
import { Container, WithStyles, withStyles, Button } from "@material-ui/core";
import styles from "../../styles/page-content";
import ApiUtils from "../../../src/utils/ApiUtils";
import { Page, Post } from "../../../src/generated/client/src";
import ReactHtmlParser, { convertNodeToElement } from "react-html-parser";
import { DomElement } from "domhandler";
import strings from "../../localization/strings";
import ArrowIcon from "@material-ui/icons/ArrowForwardRounded";
import * as classNames from "classnames";
import * as moment from "moment";
import "../../styles/feed.css";

/**
 * Interface representing component properties
 */
interface Props extends WithStyles<typeof styles> {
  slug?: string
  lang: string
}

type PageTemplate = "basic" | "fullscreen" | "dangerous" | "smallgutter";

/**
 * Interface representing component state
 */
interface State {
  page?: Page
  template: PageTemplate
  post?: Post
  loading: boolean
  isArticle: boolean
  heroBanner?: React.ReactElement
  heroContent?: React.ReactElement
  featuredImage?: string
}

/**
 * PostPage component
 */
class PostPage extends React.Component<Props, State> {

  private contentLoaded: boolean = false;

  /**
   * Constructor
   *
   * @param props component properties
   */
  constructor(props: Props) {
    super(props);
    this.state = {
      template: "basic",
      isArticle: false,
      loading: false
    };
  }

  /**
   * Component did mount life-cycle handler
   */
  public componentDidMount = () => {
    this.loadContent();
  }

  /**
   * Component will mount life-cycle handler
   */
  public componentWillMount = () => {
    this.setTemplate();
  }

  public componentWillUpdate = (prevProps: Props) => {
    if (prevProps.slug !== this.props.slug) {
      this.setTemplate();
    }
  }

  public componentDidUpdate = (prevProps: Props) => {
    if (prevProps.slug !== this.props.slug) {
      this.loadContent();
    }
  }

  /**
   * Component render method
   */
  public render() {
    const { classes, lang } = this.props;
    const pageTitle = this.state.loading ? "" : this.setTitleSource();
    return (
      <BasicLayout lang={ lang }>
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

  /**
   * Render content method
   */
  private renderContent = (pageTitle: string) => {
    const { classes } = this.props;
    if (this.state.template === "fullscreen") {
      return this.renderPostContent(pageTitle);
    }

    return (
      <Container className={ classNames( classes.root, this.state.isArticle && "article") }>
        { this.renderPostContent(pageTitle) }
      </Container>
    );

  }

  private setTemplate = () => {
    this.setState({
      template: this.getTemplate()
    });
  }

  private loadContent = async () => {
    this.setState({
      loading: true
    });

    const { slug } = this.props;
    const lang = this.props.lang;
    const slugParts = slug ? slug.split("/") : null;

    const api = ApiUtils.getApi();

    const [previewPost, previewPage] = await this.getPreview();

    if (previewPage || previewPost) {
      const page = previewPage ? previewPage[0] : undefined;
      const post = previewPost ? previewPost[0] : undefined;

      this.setState({
        page: page,
        post: post,
        isArticle: !!post,
        loading: false
      });

      this.hidePageLoader();

      const featuredMediaId = page ? page.featured_media : (post ? post.featured_media : undefined);
      const excerpt = page ? page.excerpt : (post ? post.excerpt : undefined);

      try {
        const featuredMedia = await api.getWpV2MediaById({ id: `${ featuredMediaId }` });
        const featuredImage = featuredMedia.source_url;
        this.setState({
          featuredImage: featuredImage,
        });
      } catch (error) {
        console.log(error);
      }
    } else {

      if (!slug) {
        return;
      }

      const apiCalls = await Promise.all([
        api.getWpV2Pages({ lang: [ lang ], slug: [ slug ] }),
        api.getWpV2Posts({ lang: [ lang ], slug: [ slug ] })
      ]);

      const page = apiCalls[0][0];
      const post = apiCalls[1][0];

      this.setState({
        page: page,
        post: post,
        isArticle: !!post,
        loading: false
      });

      this.hidePageLoader();

      const featuredMediaId = page ? page.featured_media : (post ? post.featured_media : undefined);
      const excerpt = page ? page.excerpt : (post ? post.excerpt : undefined);

      try {
        const featuredMedia = await api.getWpV2MediaById({ id: `${ featuredMediaId }` });
        const featuredImage = featuredMedia.source_url;
        this.setState({
          featuredImage: featuredImage,
        });
      } catch (error) {
        console.log(error);
      }
    }
  }

  /**
   * Render post content method
   */
  private renderPostContent = (pageTitle: string) => {
    const { classes, lang } = this.props;
    moment.locale(lang);
    return (
      <div className={
        classNames(classes.htmlContainer,
        this.state.isArticle && "article",
        this.state.template === "fullscreen" ? "fullscreen" : "",
        this.state.template === "smallgutter" ? "smallgutter" : "")
        }
      >
      { !this.state.heroBanner &&
        <>
          { this.state.post ? <p className={ classes.date }>{ moment(this.state.post.date).format("dddd, DD. MMMM YYYY") }</p> : "" }
          <h1 className={ classNames(classes.title, this.state.isArticle && "article") }>{ pageTitle }</h1>
        </>
      }
      { !this.state.loading &&
        this.getPageOrPostContent()
      }
      { this.contentLoaded &&
        this.loadThirdPartyScripts()
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

    if (this.state.template === "dangerous") {
      return <div dangerouslySetInnerHTML={{__html:renderedContent}} />;
    }

    this.contentLoaded = true;

    return ReactHtmlParser(renderedContent, { transform: this.transformContent });
  }

  /**
   * Hide page loader
   */
  private hidePageLoader() {
    const loaderElement = document.getElementById("pageLoader");
    if (loaderElement) {
      loaderElement.style.opacity = "0";
      setTimeout(() => {
        loaderElement.style.display = "none";
      }, 500);
    }
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
        return (
          <a href={this.getLinkHref(childNode)} style={{ textDecoration: "none" }}>
            <Button className={ classes.button } color="primary" variant="outlined" endIcon={ <ArrowIcon /> }>
              {this.getElementTextContent(childNode)}
            </Button>
          </a>
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

  /**
   * Method for getting preview
   */
  private getPreview = async () => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const preview = urlSearchParams.get("preview");
    const nonce = urlSearchParams.get("nonce");
    const draftId = urlSearchParams.get("p");
    const publishedId = urlSearchParams.get("preview_id");
    const pageid = urlSearchParams.get("page_id");
    const id = publishedId || pageid ||  draftId;

    if (!preview || !id) {
      return [];
    }

    if (nonce) {
      const [post, page] = await Promise.all([
        fetch(`${window.location.origin}/wp-json/wp/v2/posts/${id}/revisions?_wpnonce=${nonce}`),
        fetch(`${window.location.origin}/wp-json/wp/v2/pages/${id}/revisions?_wpnonce=${nonce}`)
      ]);
  
      return Promise.all([post.json(), page.json()]);
    }

    const api = ApiUtils.getApi();
    
    const page = await api.getWpV2PagesById({
      id: id
    });

    return [ page ];
  }

  /**
   * Loads javascript libraries after content is ready
   */
  private loadThirdPartyScripts = () => {
    const instagram = document.createElement("script");
    instagram.src = "//platform.instagram.com/en_US/embeds.js";
    instagram.async = true;
    document.body.appendChild(instagram);
    const facebook = document.createElement("script");
    facebook.innerHTML = `
      window.fbAsyncInit = function() {
        FB.init({
        xfbml : true,
        version : 'v2.3'
        });
        }; (function(d, s, id){
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
    `;
    facebook.async = true;
    document.body.appendChild(facebook);
    return;
  }
}

export default withStyles(styles)(PostPage);
