import * as React from "react";
import { Attachment, Post } from "../../generated/client/src";
import BasicLayout from "../BasicLayout";
import CurrentNews from "../CurrentNews";
import HeroBanner from "../HeroBanner";
import LinkBar from "../LinkBar";
import MiddleSection from "../MiddleSection";
import SocialFeed from "../SocialFeed";

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
        <MiddleSection lang={ lang } />
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