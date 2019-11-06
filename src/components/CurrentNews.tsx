import * as React from "react";
import { Typography, WithStyles, withStyles } from "@material-ui/core";
import { Post, Attachment } from "../generated/client/src";
import ApiUtils from "../utils/ApiUtils";
import styles from "../styles/current-news";
import placeholderImg from "../resources/img/muisti-konsepti.png";

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
 * CurrentNews component
 */
class CurrentNews extends React.Component<Props, State> {

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

    const posts = await api.getWpV2Posts({ per_page: 3, categories: ["4"] });

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
      <div className={ classes.root}>
        <Typography variant="h2" className={ classes.latestNewsHeading }>Ajankohtaista</Typography>
        <div className={ classes.latestNewsContainer }>
          {
            this.state.posts.map((post) => {
              const featuredMedia = post.featured_media ? this.state.featuredMedias[post.featured_media] : null;
              const featuredMediaUrl = featuredMedia ? featuredMedia.source_url : null;
              return (
                <div className={ classes.latestNewsItem } key={ post.id }>
                  <div
                    className={ classes.latestNewsImgContainer }
                    style={{ backgroundImage: `url('${( featuredMediaUrl != null ? featuredMediaUrl : placeholderImg )}')` }}
                  >
                  </div>
                  {
                    this.renderTags()
                  }
                  <Typography variant="h4" className={ classes.title }> { post.title ? post.title.rendered : "" } </Typography>
                  {/* <p dangerouslySetInnerHTML={ {__html: post.content ? post.content.rendered || "" : "" }} /> */}
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }

  /**
   * Renders the tag items
   */
  private renderTags() {
    const { classes } = this.props;
    /** TODO tee ne tagit */
    return (
      <Typography variant="subtitle1" color="secondary" className={ classes.tag } >Tagi</Typography>
    );
  }
}

export default withStyles(styles)(CurrentNews);