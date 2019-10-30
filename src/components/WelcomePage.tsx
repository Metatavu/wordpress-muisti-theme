import * as React from "react";
import Api from "muisti-wordpress-client";
import { Post, Attachment } from "muisti-wordpress-client";
import BasicLayout from "./BasicLayout";
import CurrentNews from "./CurrentNews";
import HeroBanner from "./HeroBanner";
import SiteMenu from "./SiteMenu";

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
    return (
      <BasicLayout>
        <HeroBanner />
        <CurrentNews />
        <SiteMenu />
      </BasicLayout>
    );
  }
}

export default WelcomePage;