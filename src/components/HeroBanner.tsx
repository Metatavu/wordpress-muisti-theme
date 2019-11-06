import * as React from "react";
import { Typography, WithStyles, withStyles, Button } from "@material-ui/core";
import ArrowIcon from "@material-ui/icons/ArrowForwardRounded";
import { Post, Attachment } from "../generated/client/src";
import ApiUtils from "../utils/ApiUtils";
import placeholderImg from "../resources/img/muisti-konsepti.png";
import styles from "../styles/hero-banner";

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
 * HeroBanner component
 */
class HeroBanner extends React.Component<Props, State> {

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
    const posts = await api.getWpV2Posts({ categories: ["6"] });

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
        className={ classes.heroItem }
        style={{ backgroundImage: `url('${( featuredMediaUrl != null ? featuredMediaUrl : placeholderImg )}')` }}>
        <div className={ classes.heroContent }>
          <div className={ classes.heroContentBlock }>
            <Typography color="primary" variant="h1"> { post.title ? post.title.rendered : "" } </Typography>
            <div className={ classes.heroText } dangerouslySetInnerHTML={ {__html: post.content ? post.content.rendered || "" : "" }} />
            <Button className={ classes.button } color="primary" variant="outlined" endIcon={ <ArrowIcon /> }>Mikä muisti on?</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(HeroBanner);