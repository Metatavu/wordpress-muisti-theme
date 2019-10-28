import * as React from "react";
import Api from "muisti-wordpress-client";
import { Post, Attachment } from "muisti-wordpress-client";
import { Typography } from "@material-ui/core";

/**
 * Interface representing component properties
 */
interface Props {
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

    const service = Api.getDefaultService("TOKEN");

    const posts = await service.getWpV2Posts();

    const featureMediaIds: number[] = posts
      .filter((post) => {
        return post.featured_media;
      })
      .map((post) => {
        return post.featured_media;
      })
      .reduce((unique: any, item: any) => unique.includes(item) ? unique : [...unique, item], []);

    const featureMedias = await Promise.all(featureMediaIds.map((featureMediaId) => {
      return service.getWpV2MediaById(featureMediaId.toString());
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
    return (
      <div className="latest-news">
        <Typography variant="h2">Ajankohtaista</Typography>
        <div className="latest-news-container">
          {
            this.state.posts.map((post) => {
              const featuredMedia = post.featured_media ? this.state.featuredMedias[post.featured_media] : null;
              const featuredMediaUrl = featuredMedia ? featuredMedia.source_url : null;
              return (
                <div className="latest-news-item" key={ post.id }>
                  <div className="latest-news-img-container">
                    {
                      this.renderImage(featuredMediaUrl)
                    }
                  </div>
                  {
                    this.renderTags()
                  }
                  <Typography variant="h4"> { post.title ? post.title.rendered : "" } </Typography>
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
   * Renders the tag items
   */
  private renderTags() {
    /** TODO tee ne tagit */
    return "tagi";
  }
}

export default CurrentNews;