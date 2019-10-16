import * as React from "react";
import Api from "../wpapi";
import { Post } from "../wpapi";
import { Attachment } from "../wpapi/model/attachment";
import { Card } from "material-ui";

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
 * WelcomePage component
 */
class WelcomePage extends React.Component<Props, State> {

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
      <div>
        { this.renderPosts() }
      </div>
    );
  }

  /**
   * Renders list of posts
   */
  private renderPosts = () => {
    return (
      <div>
        {
          this.state.posts.map((post) => {
            const featuredMedia = post.featured_media ? this.state.featuredMedias[post.featured_media] : null;
            const featuredMediaUrl = featuredMedia ? featuredMedia.source_url : null;
            return (
              <Card key={ post.id }>
                <h1> { post.title ? post.title.rendered : "" } </h1>
                {
                  this.renderImage(featuredMediaUrl)
                }
                <p dangerouslySetInnerHTML={ {__html: post.content ? post.content.rendered || "" : "" }} />
              </Card>
            );
          })
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
}

export default WelcomePage;