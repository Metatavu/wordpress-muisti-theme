import * as React from "react";
import ApiUtils from "../utils/ApiUtils";
import { Post, Attachment } from "../generated/client/src";
import { WithStyles, withStyles, Typography, Button, Box } from "@material-ui/core";
import styles from "../styles/middle-section";
import ArrowIcon from "@material-ui/icons/ArrowForwardSharp";
import ReactHtmlParser, { convertNodeToElement } from "react-html-parser";
import { DomElement } from "domhandler";

/**
 * Interface representing component properties
 */
interface Props extends WithStyles<typeof styles> {
  lang: string
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
 * MiddleSection component of the front page
 */
class MiddleSection extends React.Component<Props, State> {

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
    const lang = this.props.lang;
    const api = ApiUtils.getApi();
    const categories = await api.getWpV2Categories({ slug: ["keskialue"] });
    const posts = await api.getWpV2Posts({ lang: [ lang ], per_page: 2, categories: categories.map((category) => {
      return String(category.id);
    })});
    this.setState({posts: posts, loading: false});
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
      featuredMedias: featuredMediaMap
    });
  }

  /**
   * Component render method
   */
  public render() {
    const { classes } = this.props;
    const { posts, loading } = this.state;

    if (!posts.length) {
      return null;
    }

    return (
      <div className={ classes.root }>
        { 
          posts.map((post) => {
            const featuredMedia = post.featured_media ? this.state.featuredMedias[post.featured_media] : null;
            const featuredMediaUrl = featuredMedia ? featuredMedia.source_url : null;
            return (
              <Box key={ post.id } className={ classes.item }>
                <Typography color="primary" variant="h3">
                  { post.title ? post.title.rendered : "" }
                </Typography>
                <Box
                  className={ classes.imageContainer }
                  style={{ backgroundImage: `url('${( featuredMediaUrl != null ? featuredMediaUrl : "" )}')` }}
                />
                <Box>
                  {
                    ReactHtmlParser(post.content ? post.content.rendered || "" : "", { transform: this.transformContent })
                  }
                </Box>
              </Box>
            );
          })
        }
      </div>
    );
  }

  /**
   * Get element css styleclasses
   */
  private getElementClasses = (node: DomElement): string[] => {
    const classString = node.attribs ? node.attribs.class : "";
    if (node.attribs && node.attribs.class) {
      return classString.split(" ");
    }

    return [];
  }

  /**
   * Get link href
   */
  private getLinkHref = (node: DomElement) => {
    return node.attribs && node.attribs.href ? node.attribs.href : "";
  }

  /**
   * Get text content
   */
  private getElementTextContent = (node: DomElement) => {
    return node.children && node.children[0] ? node.children[0].data as string : "";
  }

  /**
   * Render identified buttons into Material UI buttons
   */
  private transformContent = (node: DomElement, index: number) => {
    const { classes } = this.props;
    const classNames = this.getElementClasses(node);
    if (classNames.indexOf("wp-block-button") > -1) {
      const childNode = node.children && node.children.length ? node.children[0] : null;
      if (childNode) {
        return (
          <a style={{ textDecoration: "none" }} href={this.getLinkHref(childNode)}>
            <Button className={ classes.button } color="primary" variant="outlined" endIcon={ <ArrowIcon /> }>
              {this.getElementTextContent(childNode)}
            </Button>
          </a>
        );
      }
    }
    return convertNodeToElement(node, index, this.transformContent);
  }
}

export default withStyles(styles)(MiddleSection);