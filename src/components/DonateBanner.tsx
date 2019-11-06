import * as React from "react";
import ApiUtils from "../utils/ApiUtils";
import { Post, Attachment } from "../generated/client/src";
import { WithStyles, withStyles, Typography, Button } from "@material-ui/core";
import styles from "../styles/donate-banner";
import ArrowIcon from "@material-ui/icons/ArrowForwardSharp";

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
    const posts = await api.getWpV2Posts({ categories: ["8"]});

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
            <div className={ classes.textContainer } dangerouslySetInnerHTML={ {__html: post.content ? post.content.rendered || "" : "" }} />
            <Button className={ classes.button } color="primary" variant="outlined" endIcon={ <ArrowIcon /> }>Lahjoita?</Button>
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