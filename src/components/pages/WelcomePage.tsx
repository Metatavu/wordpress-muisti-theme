import * as React from "react";
import BasicLayout from "../BasicLayout";
import CurrentNews from "../CurrentNews";
import HeroBanner from "../HeroBanner";
import { Post, Attachment } from "../../generated/client/src";
import ApiUtils from "../../utils/ApiUtils";
import LinkBar from "../LinkBar";
import DonateBanner from "../DonateBanner";
import SocialFeed from "../SocialFeed";
import MetaTags from "react-meta-tags";
import metatagImage from "../../resources/img/muisti-konsepti.png";

/**
 * Interface representing component properties
 */
interface Props {
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
   * Component render method
   */
  public render() {
    const { lang } = this.props;

    return (
      <BasicLayout lang={ lang }>
        <HeroBanner onTitleLoaded={() => this.hidePageLoader()} lang={ lang } />
        <LinkBar lang={ lang } />
        <DonateBanner lang={ lang } />
        <CurrentNews lang={ lang } />
        <SocialFeed lang={ lang } />
      </BasicLayout>
    );
  }

  /**
   * Hide page loader
   */
  private hidePageLoader() {
    const loaderElement = document.getElementById("pageLoader");
    if (loaderElement) {
      loaderElement.style.opacity = "0";
      setTimeout(() => {
        loaderElement.style.display = "none";
      }, 500);
    }
  }
}

export default WelcomePage;