import * as React from "react";
import Api from "muisti-wordpress-client";
import { Post, Attachment } from "muisti-wordpress-client";
import { Typography, WithStyles, createStyles, Theme, withStyles, Button } from "@material-ui/core";
import ArrowIcon from "@material-ui/icons/ArrowForwardRounded";

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

const styles = (theme: Theme) =>
  createStyles({
    root: {
      height: "100vh",
      overflow: "hidden"
    },
    heroItem: {
      position: "relative",
      height: "100%"
    },
    heroImage: {
      width: "100%"
    },
    heroContent: {
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      display: "flex",
      alignItems: "center",
      backgroundImage: "linear-gradient(to right, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0))"
    },
    heroContentBlock: {
      maxWidth: "50vw",
      display: "flex",
      marginLeft: "5%",
      flexDirection: "column"
    },
    heroText: {
      color: theme.palette.primary.main
    },
    button: {
      width: 300
    }
  });

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

    const service = Api.getDefaultService("TOKEN");

    const posts = await service.getWpV2Posts();
    console.log(posts);
    const featureMediaIds: number[] = posts
      .filter((post) => {
        return post.featured_media;
      })
      .map((post) => {
        return post.featured_media;
      })
      .reduce((unique: any, item: any) => unique.includes(item) ? unique : [...unique, item], []);

    const featureMedias = await Promise.all(featureMediaIds.map((featureMediaId) => {
      return service.getWpV2MediaById({ id: featureMediaId.toString() });
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
      <div className={ classes.heroItem} key={ post.id }>
        {
          this.renderImage(featuredMediaUrl)
        }
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

  /**
   * Renders post image
   * @param url
   */
  private renderImage(url?: string | null) {
    const { classes } = this.props;
    if (!url) {
      return null;
    }

    return (
      <img className={ classes.heroImage } src={ url }></img>
    );
  }
}

export default withStyles(styles)(HeroBanner);