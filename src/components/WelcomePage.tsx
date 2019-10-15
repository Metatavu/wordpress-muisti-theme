import * as React from "react";
import Api from "../wpapi";
import { Post } from "../wpapi";

/**
 * Interface representing component properties
 */
interface Props {
}

/**
 * Interface representing component state
 */
interface State {
  posts: Post[]
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
      posts: []
    };
  }

  /**
   * Component did mount life-cycle handler
   */
  public componentDidMount = async () => {
    const service = Api.getDefaultService("TOKEN");

    this.setState({
      posts: await service.getWpV2Posts()
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
            return (
              <div key={ post.id }> 
                <h1> { post.title ? post.title.rendered : "" } </h1>
                <p dangerouslySetInnerHTML={ {__html: post.content ? post.content.rendered || "" : "" }} />
              </div>
            );
          })
        }
      </div>
    );
  }
}

export default WelcomePage;