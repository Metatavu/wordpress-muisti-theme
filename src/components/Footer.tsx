import * as React from "react";
import styles from "../styles/footer";
import { WithStyles, withStyles, Container, Typography, Button, Link } from "@material-ui/core";
import { Post, Attachment, MenuLocationData, MenuItemData } from "../generated/client/src";
import ApiUtils from "../utils/ApiUtils";
import { DomElement } from "domhandler";
import { Link as RouterLink } from "react-router-dom";
import ReactHtmlParser, { convertNodeToElement } from "react-html-parser";
import ArrowIcon from "@material-ui/icons/ArrowForwardSharp";
import theme from "../styles/theme";

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
  posts: Post[],
  footerDatas: Post[],
  menu?: MenuLocationData,
  featuredMedias: { [ key: number ]: Attachment },
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
      posts: [],
      footerDatas: [],
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
    const postCategories = await api.getWpV2Categories({ slug: ["footer-posts"] });
    const contactsCategories = await api.getWpV2Categories({ slug: ["footer-contacts"] });
    const posts = await api.getWpV2Posts({ per_page: 2, categories: postCategories.map((category) => {
      return String(category.id);
    })});
    const footerDatas = await api.getWpV2Posts({ per_page: 1, categories: contactsCategories.map((category) => {
      return String(category.id);
    })});
    const menu = await api.getMenusV1LocationsById({ id: "footer" });

    const featureMediaIds: number[] = footerDatas
      .filter((footerData) => {
        return footerData.featured_media;
      })
      .map((footerData) => {
        return footerData.featured_media;
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
      footerDatas: footerDatas,
      menu: menu,
      featuredMedias: featuredMediaMap,
      loading: false
    });
  }

  /**
   * Component render method
   */
  public render() {
    const { classes } = this.props;
    if (!this.state.footerDatas.length) {
      return null;
    }
    const footerData = this.state.footerDatas[0];
    const featuredMedia = footerData.featured_media ? this.state.featuredMedias[footerData.featured_media] : null;
    const featuredMediaUrl = featuredMedia ? featuredMedia.source_url : null;
    return (
      <div className={ classes.root }>
        <div className={ classes.footerPosts }>
          {
            this.renderPosts()
          }
        </div>
        <div style={{ position: "relative" }}>
          <div className={ classes.imageContainer }>
            {
              this.renderImage(featuredMediaUrl)
            }
          </div>
          <div className={ classes.contentContainer }>
            <Container maxWidth="lg" className={ classes.logoAndSomeContainer }>
              <img src={ this.props.logo } />
              <div className={ classes.someLinkContainer }>
                {/* TODO: Social media links here */}
              </div>
            </Container>
            <Container className={ classes.contactsMenu } maxWidth="lg">
              <div>
                {
                  this.renderContacts()
                }
              </div>
              <div>
                {
                  this.renderMenu()
                }
              </div>
            </Container>
          </div>
        </div>
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
          <RouterLink style={{ textDecoration: "none" }} to={slug || "/"}>
            <Button
              className={ classes.button }
              style={{ marginTop: theme.spacing(5) }}
              color="primary"
              variant="outlined"
              endIcon={ <ArrowIcon /> }
            >
              {
                this.getElementTextContent(childNode)
              }
            </Button>
          </RouterLink>
        );
      }
    }
    return convertNodeToElement(node, index, this.transformContent);
  }

  private renderPosts = () => {
    const { classes } = this.props;
    if (!this.state.posts.length) {
      return null;
    } else {
      return (
        this.state.posts.map((post) => {
          return (
            <Container key={ post.id } className={ classes.footerPost }>
              <Typography color="primary" variant="h2"> { post.title ? post.title.rendered : "" } </Typography>
              <div>
                {
                  ReactHtmlParser(post.content ? post.content.rendered || "" : "", { transform: this.transformContent })
                }
              </div>
            </Container>
          );
        })
      );
    }
  }

  private renderContacts = () => {
    if (!this.state.footerDatas.length) {
      return null;
    }
    const footerData = this.state.footerDatas[0];
    return (
      <div key={ footerData.id }>
        {
          ReactHtmlParser(footerData.content ? footerData.content.rendered || "" : "", { transform: this.transformContent })
        }
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

  /**
   * Render menu method
   */
  private renderMenu() {
    const { classes } = this.props;
    if (!this.state.menu || !this.state.menu.items) {
      return null;
    }

    /**
     * Split into two item arrays to render the menu correctly
     *
     * menu items with and without children
     */
    const itemsWithChildren: MenuItemData[] = [];
    const itemsWithoutChildren: MenuItemData[] = [];

    this.state.menu.items.forEach((item) => {
      if (item.child_items && item.child_items.length > 0) {
        itemsWithChildren.push(item);
      } else {
        itemsWithoutChildren.push(item);
      }
    });

    return (
      <div className={ classes.menuContent }>
      {
        itemsWithChildren.map((item) => {
          return this.renderMenuItem(item);
        })
      }
      {
        this.renderMenuItemsGroupWithoutChildren(itemsWithoutChildren)
      }
    </div>
    );
  }

  /**
   * Menu group without submenu items render method
   */
  private renderMenuItemsGroupWithoutChildren = (items: MenuItemData[]) => {
    const { classes } = this.props;
    return (
      <div className={ classes.menuGroup }>
        {items.map((item) =>
          <Link
            className={ classes.link }
            variant="h4"
            key={item.db_id}
            href={ item.url }
          >
            {
              item.title
            }
          </Link>)}
      </div>
    );
  }

  /**
   * Menu item render method
   */
  private renderMenuItem = (item: MenuItemData) => {
    const { classes } = this.props;
    if (!item) {
      return null;
    }

    return (
      <div className={ classes.menuGroup } key={ item.db_id }>
        <Link
          className={ classes.link }
          href={ item.url }
          variant="h4"
        >
          {
            item.title
          }
        </Link>
        {
          (item.child_items || [] ).map((childItems) => {
            return this.renderMenuSubItem(childItems);
          })
        }
      </div>
    );
  }

  /**
   * Menu sub item render method
   */
  private renderMenuSubItem = (item?: MenuItemData) => {
    if (!item) {
      return null;
    }
    const { classes } = this.props;
    return (
      <Link
        className={ classes.subLink }
        key={ item.db_id }
        href={ item.url }
        variant="body2"
      >
        {
          item.title
        }
      </Link>
    );
  }
}

export default withStyles(styles)(Footer);