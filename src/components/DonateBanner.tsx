import * as React from "react";
import ApiUtils from "../utils/ApiUtils";
import { Post, Attachment } from "../generated/client/src";
import { WithStyles, withStyles, Typography, Button } from "@material-ui/core";
import styles from "../styles/donate-banner";
import ArrowIcon from "@material-ui/icons/ArrowForwardSharp";
import ReactHtmlParser, { convertNodeToElement } from "react-html-parser";
import { DomElement } from "domhandler";
import { Link } from "react-router-dom";

/**
 * Interface representing component properties
 */
interface Props extends WithStyles<typeof styles> {

}

/**
 * Interface representing component state
 */
interface State {
  posts: Post[],
  featuredMedias: { [ key: number ]: Attachment },
  loading: boolean
}

/**
 * DonateBanner component
 */
class DonateBanner extends React.Component<Props, State> {

  /**
   * Constructor
   *
   * @param props component properties
   */
  constructor(props: Props) {
    super(props);
    this.state = {
      posts: [],
      featuredMedias: { },
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
    const categories = await api.getWpV2Categories({ slug: ["lahjoitus"] });
    const posts = await api.getWpV2Posts({ categories: categories.map((category) => {
      return String(category.id);
    })});

    const featureMediaIds: number[] = posts
    .filter((post) => {
      return post.featured_media;
    })
    .map((post) => {
      return post.featured_media;
    })
    .reduce((unique: any, item: any) => unique.includes(item) ? unique : [...unique, item], []);

    const featureMedias = await Promise.all(featureMediaIds.map((featureMediaId) => {
      return api.getWpV2MediaById({ id: featureMediaId.toString() });
    }));

    const featuredMediaMap: { [ key: number ]: Attachment } = { };

    for (let i = 0; i < featureMedias.length; i++) {
      const featureMedia = featureMedias[i];
      featuredMediaMap[featureMedia.id!] = featureMedia;
    }

    this.setState({
      posts: posts,
      featuredMedias: featuredMediaMap,
      loading: false
    });
  }

  /**
   * Component render method
   */
  public render() {
    const { classes } = this.props;
    return (
      <div className={ classes.root }>
        {
          this.renderPost()
        }
      </div>
    );
  }

  private getElementClasses = (node: DomElement): string[] => {
    const classString = node.attribs ? node.attribs.class : "";
    if (node.attribs && node.attribs.class) {
      return classString.split(" ");
    }

    return [];
  }

  private getLinkHref = (node: DomElement) => {
    return node.attribs && node.attribs.href ? node.attribs.href : "";
  }

  private getElementTextContent = (node: DomElement) => {
    return node.children && node.children[0] ? node.children[0].data as string : "";
  }

  private transformContent = (node: DomElement, index: number) => {
    const { classes } = this.props;
    const classNames = this.getElementClasses(node);
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

  private renderPost() {
    const { classes } = this.props;
    if (!this.state.posts.length) {
      return null;
    }
    const post = this.state.posts[0];
    const featuredMedia = post.featured_media ? this.state.featuredMedias[post.featured_media] : null;
    const featuredMediaUrl = featuredMedia ? featuredMedia.source_url : null;
    return (
      <div
        key={ post.id }
        className={ classes.donateItem }>
        <div className={ classes.donateContent }>
          <div className={ classes.donateContentBlock }>
            <Typography color="primary" variant="h2"> { post.title ? post.title.rendered : "" } </Typography>
            <div className={ classes.textContainer }>
              {
                ReactHtmlParser(post.content ? post.content.rendered || "" : "", { transform: this.transformContent })
              }
            </div>
          </div>
          <div className={ classes.imageContainer }>
            {
              this.renderImage(featuredMediaUrl)
            }
          </div>
        </div>
      </div>
    );
  }

  /**
   * Renders post image
   * @param url
   */
  private renderImage(url?: string | null) {
    if (!url) {
      return null;
    }

    return (
      <img src={ url }></img>
    );
  }
}

export default withStyles(styles)(DonateBanner);